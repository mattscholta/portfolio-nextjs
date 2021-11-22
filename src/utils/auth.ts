import { IncomingMessage, ServerResponse } from 'http';

// Hard coding pass will be replaced with firebase auth if necessary.
const ADMIN_USER = 'jax';
const ADMIN_PASS = 'scholta';

const headerToBase64 = (header: string): [string, string] => {
  const b64auth = header.split(' ')[1];
  const [user, password] = Buffer.from(b64auth, 'base64').toString().split(':');

  return [user, password];
};

export function checkBasicAuth(
  req: IncomingMessage,
  res: ServerResponse
): boolean {
  if (req.headers.authorization) {
    const [user, password] = headerToBase64(req.headers.authorization);
    if (user === ADMIN_USER && ADMIN_PASS === password) {
      return true;
    }
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Protected"');
  res.statusCode = 401;
  if (res.end) {
    res.end();
  }
  return false;
}
