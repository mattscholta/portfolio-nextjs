import * as React from 'react';

import { data } from '@src/data/productivity';

export interface SectionProductivityProps {
  className?: string;
}

/**
 * @name SectionProductivity
 * @description Stateless Component / Pure Function
 */
export const SectionProductivity = (props: SectionProductivityProps) => {
  const { className } = props;

  // Markup
  const renderListItem = (link: any) => {
    const { href, title } = link;

    return (
      <a
        {...link}
        className="u-text-24 u-py-2x u-flex-1 u-text-center"
        key={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {title}
      </a>
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

      <ul className="u-flex u-flex-col md:u-flex-row">
        {data.map(renderListItem)}
      </ul>
    </section>
  );
};
