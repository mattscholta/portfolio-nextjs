import { Github, LinkedIn, StackOverflow, Twitter } from '@src/icons';
import { Icon } from '@src/types/icon';
import { BarGuideLogo } from '../BarGuideLogo/BarGuideLogo';

interface Data extends Partial<HTMLAnchorElement> {
  icon: React.FC<Icon>;
  label: string;
}

// const data: Partial<HTMLAnchorElement>[] = [
const data: Data[] = [
  {
    href: 'https://github.com/visormatt',
    icon: Github,
    label: 'github',
    title: 'Find me on Github'
  },
  {
    href: 'https://www.linkedin.com/in/matthewscholta',
    icon: LinkedIn,
    label: 'linkedin',
    title: 'Connect on LinkedIn'
  },
  {
    href: 'https://stackoverflow.com/story/visormatt',
    icon: StackOverflow,
    label: 'stack-overflow',
    title: 'As required on StackOverflow'
  },
  {
    href: 'https://twitter.com/visormatt',
    icon: Twitter,
    label: 'twitter',
    title: 'Occasionally on Twitter'
  },
  {
    href: 'https://barguide.io',
    icon: BarGuideLogo,
    label: 'barguide',
    title: 'Working on BarGuide.io'
  }
];

export { data };
export type { Data };
