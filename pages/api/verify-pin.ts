import type { NextApiRequest, NextApiResponse } from 'next'

// Server-side proxy to the CRM's tracking-number + PIN verification endpoint
// (crm_system/tracking/index.php?api=verify_pin), kept server-side for the
// same reason as submit-lead.ts: no CORS exposure, no internal URL leaked to
// the browser.
const VERIFY_URL = 'https://crm.cargolord.co.uk/tracking/'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' })
    return
  }

  const { trackingNumber, pin } = req.body

  if (!trackingNumber || !pin) {
    res.status(422).json({ success: false, message: 'Tracking number and PIN are required.' })
    return
  }

  const body = new URLSearchParams({ api: 'verify_pin', tn: trackingNumber, pin })

  try {
    const crmRes = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
    const data = await crmRes.json().catch(() => null)

    if (data && data.success) {
      res.status(200).json({ success: true })
    } else {
      res.status(200).json({ success: false, message: (data && data.message) || "That tracking number and PIN don't match our records." })
    }
  } catch (err) {
    res.status(502).json({ success: false, message: 'Could not reach our systems — please try again or call us.' })
  }
}
