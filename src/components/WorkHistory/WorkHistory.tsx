import * as React from 'react';
import classnames from 'classnames';

import {
  data as experience,
  Experience as ExperienceInstance
} from '@src/data/experience';

// import { analytics } from '@client/utils/analytics';
import styles from './styles.module.css';

export interface WorkHistoryProps {
  className?: string;
}

/**
 * @name WorkHistory
 * @description Stateless Component / Pure Function
 */
const WorkHistory: React.FC<WorkHistoryProps> = (props) => {
  const { className } = props;

  // Styles
  const css = classnames(styles.component, className);

  // Handlers
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget } = event;
    const { gaLabel } = currentTarget.dataset;

    // analytics.event('work-history', 'click', gaLabel);
  };

  // Markup
  const renderWorkplace = (node: ExperienceInstance) => {
    const { date, description, featured, link, name, role } = node;
    const cssWorkplace = classnames({ featured });

    return (
      <li className={cssWorkplace} key={link}>
        <h3>
          <a
            className="spot-primary"
            data-ga-label={name.toLowerCase()}
            href={link}
            onClick={onClick}
            rel="noopener noreferrer"
            target="_blank"
          >
            {name}
          </a>{' '}
          | {role}
        </h3>
        <em>{date}</em>
        {/* <div>{description}</div> */}
      </li>
    );
  };

  return (
    <div className={css}>
      <h2 className="ui-heading medium">Work History / Experience</h2>
      <ul className={styles.workplaces}>{experience.map(renderWorkplace)}</ul>
      <p className={styles.more}>
        * Visit{' '}
        <a
          className="spot-primary"
          href="https://www.linkedin.com/in/matthewscholta"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{' '}
        for more info.
      </p>
    </div>
  );
};

export { WorkHistory };
