import type { NextApiRequest, NextApiResponse } from 'next'

// Server-side proxy into Perfex CRM's native "Web to Lead" feature
// (Setup > Leads > Web to Lead, form key below). Kept server-side so the
// browser never needs CORS access to crm.cargolord.co.uk, and so the form
// key isn't exposed in client-side source.
const WTL_FORM_KEY = '1ac013107ed04203a669372b6c9a9fb7'
const WTL_URL = `https://crm.cargolord.co.uk/forms/wtl/${WTL_FORM_KEY}`

type LeadPayload = {
  name: string
  email?: string
  phone?: string
  description: string
  // Honeypot: a field real visitors never see or fill in. Bots that
  // auto-fill every input on the form will fill this one too.
  company_website?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' })
    return
  }

  const { name, email, phone, description, company_website } = req.body as LeadPayload

  // Bot caught by the honeypot -- pretend success so it doesn't learn to
  // adapt, but never actually forward it to the CRM.
  if (company_website) {
    res.status(200).json({ success: true })
    return
  }

  if (!name || !description) {
    res.status(422).json({ success: false, message: 'Missing required fields' })
    return
  }

  const body = new URLSearchParams({
    key: WTL_FORM_KEY,
    name,
    email: email || '',
    phone: phone || '',
    description,
  })

  try {
    const perfexRes = await fetch(WTL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    const data = await perfexRes.json().catch(() => null)

    if (data && data.success) {
      res.status(200).json({ success: true })
    } else {
      res.status(502).json({ success: false, message: 'CRM rejected the submission' })
    }
  } catch (err) {
    res.status(502).json({ success: false, message: 'Could not reach CRM' })
  }
}
