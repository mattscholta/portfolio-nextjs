import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

interface AppErrorMessageProps {
  className?: string;
  message?: string;
}

/**
 * @name AppErrorMessage
 * @description Used to display errors to our user.
 */
const AppErrorMessage: React.FC<AppErrorMessageProps> = (props) => {
  const { className, message } = props;

  // Styles
  // Styles
  const cssComponent = classnames(styles.component, className);

  // Handlers
  const onClickRefresh = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.location.reload();
  };

  // 🔌 Short Circuit
  if (!message) return null;

  return (
    <div className={cssComponent}>
      <h1 className="ui-heading u-mb-2x">¯\_(ツ)_/¯</h1>
      <p>{message}</p>
      <div className="u-flex">
        <a className="ui-link" href="/">
          Homepage
        </a>
        <span className="u-mx-1x">|</span>
        <a className="ui-link" href="/" onClick={onClickRefresh}>
          Try again
        </a>
      </div>
    </div>
  );
};

export { AppErrorMessage };
export type { AppErrorMessageProps };
