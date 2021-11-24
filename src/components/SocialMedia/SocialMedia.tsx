import * as React from 'react';
import { color as colors } from '@barguide/style-guide';
import classnames from 'classnames';

import { analytics } from '@src/utils/analytics';
import { Data, data } from './data';

import styles from './styles.module.css';

export interface SocialMediaProps {
  className?: string;
  color?: string;
  fill?: string;
}

/**
 * @name SocialMedia
 * @description Simple component that wraps up my social media accounts
 */
const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const { className, color = colors.white, fill = colors.primary } = props;

  // Styles
  const css = classnames(styles.component, className);

  // Handlers
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget } = event;
    const { gaLabel } = currentTarget.dataset;

    analytics.event('footer', 'click', gaLabel);
  };

  // Markup
  const renderLink = (link: Data) => {
    const { href, icon, label, title } = link;
    const Icon = icon;

    return (
      <a
        className={styles.icon}
        data-ga-label={label}
        href={href}
        key={label}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        <Icon color={color} fill={fill} />
      </a>
    );
  };

  return <div className={css}>{data.map(renderLink)}</div>;
};

export { SocialMedia };
