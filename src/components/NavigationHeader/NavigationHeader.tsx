import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';
import Link from 'next/link';

import { Logo } from '@src/components/Logo';
import { useRoutes } from '@src/hooks/useRoutes';

import styles from './styles.module.css';

interface NavigationHeaderProps {
  className?: string;
}

/**
 * @name NavigationHeader
 * @description tbd...
 */
const NavigationHeader: React.FC<NavigationHeaderProps> = (props) => {
  const { className } = props;

  // Hooks
  const { active } = useRoutes();

  // Styles
  const tailwind = `ui-container-xl u-flex u-items-center`;
  const cssActive = styles.active;
  const cssComponent = classnames('ui-shadow', styles.component, className);
  const cssLinks = classnames(tailwind, styles.links);

  const cssAbout = classnames(styles.link, { [cssActive]: active.homepage });
  const cssPhotos = classnames(styles.link, { [cssActive]: active.photos });
  const cssContact = classnames(styles.link, { [cssActive]: active.contact });

  return (
    <div className={cssComponent}>
      <nav className={cssLinks}>
        {/*
        <Link href="/">
          <Logo className={styles.logo} fill={color.white} />
        </Link>
        */}
        <Link href="/">
          <a className={cssAbout}>About</a>
        </Link>
        <Link href="/photos">
          <a className={cssPhotos}>Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className={cssContact}>Ramblings</a>
        </Link>
        <Link href="/uses">
          <a className={cssContact}>Uses</a>
        </Link>
      </nav>
    </div>
  );
};

export { NavigationHeader };
export type { NavigationHeaderProps };
