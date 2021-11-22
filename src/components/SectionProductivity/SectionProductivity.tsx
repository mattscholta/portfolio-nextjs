import * as React from 'react';

import { data } from '@src/data/productivity';

export interface SectionProductivityProps {
  className?: string;
}

/**
 * @name SectionProductivity
 * @description Stateless Component / Pure Function
 */
const SectionProductivity: React.FC<SectionProductivityProps> = (props) => {
  const { className } = props;

  // Setup
  const propsLink = {
    rel: 'noopener noreferrer',
    target: '_blank'
  };

  // Markup
  const renderListItem = (link: any) => {
    const { href, title } = link;

    return (
      <li className="u-py-2x" key={href}>
        <a {...propsLink} {...link} className="u-text-24">
          {title}
        </a>
      </li>
    );
  };

  return (
    <section className={className}>
      <h2 className="ui-heading">Productivity</h2>
      <span className="ui-subhead" />

      <p>
        These apps are just useful for navigating the day-to-day. Some of which
        I am highly satisfied with like Rocket, 1Pass and BetterTouch, and the
        others are just necessary.
      </p>

      <ul style={{ columnCount: 3, textAlign: 'center' }}>
        {data.map(renderListItem)}
      </ul>
    </section>
  );
};

export { SectionProductivity };
