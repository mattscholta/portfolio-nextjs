import { LinkProps } from 'next/link';

export interface Data extends LinkProps {
  copy: string;
}

export const data: Data[] = [
  {
    copy: 'Home',
    href: '/'
  },
  {
    copy: 'About',
    href: '/about'
  },
  {
    copy: 'Contact',
    href: '/contact'
  }
];
