import { NextApiRequest, NextApiResponse } from 'next'

// pages/api/amplitude.js
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not defined' })
  }

  // Use the key securely, for example, to make an authenticated request to Amplitude or handle other server-side logic
  res
    .status(200)
    .json({ message: 'API key accessed securely on server-side', apiKey })
}
