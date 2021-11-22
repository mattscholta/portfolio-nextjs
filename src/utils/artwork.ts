import { SITE_AUTHOR, SITE_EMAIL_ADDRESS } from '@src/config/constants';

/**
 * @description Adding a personal touch never hurt anyone right, and some
 * shameless self-promotion isn't all that bad either.
 */
const script = `
<!--

    _.._..,_,_      Author: ${SITE_AUTHOR}
   (          )     Email: ${SITE_EMAIL_ADDRESS}
    ]~,"-.-~~[
  .=])' (;  ([        - Github: https://github.com/visormatt
  | ]:: '    [        - LinkedIn https://linkedin.com/in/MatthewScholta
  '=]): .)  ([        - Twitter https://www.twitter.com/visormatt
    |:: '    |
     ~~~~~~~~       Ⓒ ${new Date().getFullYear()}

-->
`;

export { script };
