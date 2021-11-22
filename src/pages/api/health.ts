import type { NextApiRequest, NextApiResponse } from 'next';

const handler = function (_req: NextApiRequest, res: NextApiResponse): void {
  res.status(200).json({
    ok: true,
    route: '/api/health',
    status: 200
  });
};

export default handler;
