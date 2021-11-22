import * as React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import { Routes, useRoutes } from '@src/hooks/useRoutes';
import { Data, data } from './data';

import styles from './styles.module.css';

interface NavigationFooterProps {
  className?: string;
}

/**
 * @name NavigationFooter
 * @description tbd...
 */
const NavigationFooter: React.FC<NavigationFooterProps> = (props) => {
  const { className } = props;

  // Hooks
  const { active } = useRoutes();

  // Setup
  const date = new Date();
  const year = date.getFullYear();

  // Styles
  const cssComponent = classnames(styles.component, className);

  // Markup
  const renderLink = (link: Data) => {
    const key = link.copy.toLowerCase();
    const cssLink = classnames(styles.link, {
      [styles.active]: active[key as Routes]
    });

    return (
      <Link {...link} key={link.copy}>
        <a className={cssLink}>{link.copy}</a>
      </Link>
    );
  };

  return (
    <div className={cssComponent}>
      <div className="ui-container-xl u-text-center">
        <div className={styles.links}>{data.map(renderLink)}</div>
        <p>
          &copy; {year} - Built with{' '}
          <span className="u-text-primary">&hearts;</span> in San Diego, CA.
        </p>
      </div>
    </div>
  );
};

export { NavigationFooter };
export type { NavigationFooterProps };
