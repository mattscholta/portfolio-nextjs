import { IS_DEVELOPMENT } from './settings';

export const DEBUG_MARKERS = IS_DEVELOPMENT
  ? { endColor: 'red', fontSize: '12px', startColor: 'green' }
  : undefined;

export const CLIENT_ASSET_PATH = `https://s3-us-west-1.amazonaws.com/mattscholta`;
export const CLIENT_CLOUDINARY = `https://res.cloudinary.com/mattscholta/image/upload`;

export const SITE_AUTHOR = `Matthew Scholta`;
export const SITE_DESCRIPTION = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur magnam modi earum. Doloribus culpa, facilis dolor.`;
export const SITE_EMAIL_ADDRESS = `matthew.scholta@gmail.com`;
export const SITE_EMAIL_LINK = `mailto:${SITE_EMAIL_ADDRESS}`;
export const SITE_FACEBOOK = 'https://www.facebook.com/barguide';
export const SITE_INSTAGRAM = 'https://www.instagram.com/barguide';
export const SITE_URL = 'https://mattscholta.com';
export const SITE_TITLE = 'Matthew Scholta';
