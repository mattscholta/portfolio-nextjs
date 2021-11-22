import { LinkProps } from 'next/link';

const data: LinkProps[] = [
  {
    children: 'About',
    href: '/'
  },
  {
    children: 'Portfolio',
    href: '/portfolio'
  },
  {
    children: 'Ramblings',
    href: '/posts'
  },
  {
    children: 'Uses',
    href: '/uses'
  }
];

export { data };
