import * as React from 'react';
import classnames from 'classnames';

import { BlockQuote } from '@src/components/BlockQuote';
import { SectionHardware } from '@src/components/SectionHardware';
import { SectionOther } from '@src/components/SectionOther';
import { SectionProductivity } from '@src/components/SectionProductivity';
import { SectionSoftware } from '@src/components/SectionSoftware';
import * as links from '@src/data/uses';

import styles from './uses.module.css';

interface IndexProps {
  posts: any[];
}

/**
 * @name Index
 * @description Application landing page (homepage)
 */
const Index: React.FC<IndexProps> = (_props) => {
  // Setup
  const propsLink = { rel: 'noopener noreferrer', target: '_blank' };

  // Styles
  const cssComponent = classnames('ui-main', styles.component);

  // Markup
  const linkUses = (
    <a {...propsLink} href={links.hrefUses}>
      uses.tech
    </a>
  );

  return (
    <div className={cssComponent}>
      <div className="ui-container-md">
        <h1 className="u-visually-hidden">Uses...</h1>

        <BlockQuote className="ui-container-md u-mt-8x" simple={true}>
          Check out {linkUses} for more pages from other developers around the
          world.
        </BlockQuote>

        <br />

        <div className="u-px-2x">
          <SectionHardware className={styles.section} />
          <SectionSoftware className={styles.section} />
          <SectionProductivity className={styles.section} />
          <SectionOther className={styles.section} />
        </div>
      </div>
    </div>
  );
};

export { Index as default, Index };
export type { IndexProps };
