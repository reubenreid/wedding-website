// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type GetKeyData = {
  pubKey: string
  servKey: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetKeyData>
) {
  res.status(200).json({ pubKey: process.env.EMAIL_PUBLIC_KEY || "", servKey: process.env.SERVICE_KEY || "" })
}
