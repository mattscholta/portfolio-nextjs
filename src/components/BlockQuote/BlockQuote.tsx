import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export interface BlockQuoteProps {
  className?: string;
  simple?: boolean;
}

/**
 * @name BlockQuote
 * @description Stateless Component / Pure Function
 */
const BlockQuote: React.FC<BlockQuoteProps> = (props) => {
  const { children, className, simple = false } = props;

  // Styles
  const cssComponent = classnames(styles.component, className);

  return (
    <div className={cssComponent}>
      {!simple && <hr />}
      <blockquote>{children}</blockquote>
      {!simple && <hr />}
    </div>
  );
};

export { BlockQuote };
