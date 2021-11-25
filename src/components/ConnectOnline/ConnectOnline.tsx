import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';

import { Github, LinkedIn, Twitter } from '@src/icons';
import { analytics } from '@src/utils/analytics';

import styles from './styles.module.css';

export interface ConnectOnlineProps {
  className?: string;
}

/**
 * @name ConnectOnline
 * @description Stateless Component / Pure Function
 */
const ConnectOnline: React.FC<ConnectOnlineProps> = (props) => {
  const { className } = props;

  // Styles
  const css = classnames(styles.component, className);
  const cssLinks = classnames('u-flex u-flex-column', styles.links);

  // Handlers
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget } = event;
    const { gaLabel } = currentTarget.dataset;

    analytics.event('connect-online', 'click', gaLabel);
  };

  return (
    <div className={css}>
      <h2 className="ui-heading medium">Connect Online</h2>

      <div className={cssLinks}>
        <a
          href="https://www.linkedin.com/in/matthewscholta/"
          data-ga-label="linkedin"
          onClick={onClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <LinkedIn
            className={styles.icon}
            fill={color.gray[7]}
            height={20}
            width={20}
          />
          Professionally on <span className="spot-primary">LinkedIn</span>
        </a>
        <a
          data-ga-label="github"
          href="https://github.com/visormatt"
          onClick={onClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Github
            className={styles.icon}
            fill={color.gray[7]}
            height={20}
            width={20}
          />
          Always coding on <span className="spot-primary">Github</span>
        </a>
        {/*
        <a
          href="https://stackoverflow.com/story/visormatt"
          data-ga-label="stack-overflow"
          onClick={onClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <StackOverflow
            className={styles.icon}
            fill={color.gray[7]}
            height={20}
            width={20}
          />
          As required on <span className="spot-primary">Stack Overflow</span>
        </a>
        */}
        <a
          href="https://twitter.com/visormatt"
          data-ga-label="twitter"
          onClick={onClick}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Twitter
            className={styles.icon}
            fill={color.gray[7]}
            height={20}
            width={20}
          />
          Occasionally on <span className="spot-primary">Twitter</span>
        </a>
      </div>
    </div>
  );
};

export { ConnectOnline };
