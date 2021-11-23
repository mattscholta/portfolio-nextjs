import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';

import { SocialMedia } from '../SocialMedia/SocialMedia';

import styles from './styles.module.css';

export interface FooterProps {}

/**
 * @name Footer
 * @description Application Footer with social media links
 */
const Footer: React.FC<FooterProps> = (_props) => {
  // Styles
  const css = classnames(styles.component);
  const cssCopy = classnames('u-flex container', styles.copy);

  return (
    <div className={css}>
      <div className={cssCopy}>
        Made with <span className="spot-primary u-mx-1xs">&hearts;</span> in San
        Diego, CA.
      </div>
      <SocialMedia
        className={styles.social}
        color={color.gray[8]}
        fill={color.white}
      />
    </div>
  );
};

export { Footer };
