import * as React from 'react';
import classnames from 'classnames';

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
  const tailwind = 'u-block u-text-14';
  const cssComponent = classnames(tailwind, className);

  // 🔌 Short Circuit
  if (!message) return null;

  return <div className={cssComponent}>{message}</div>;
};

export { AppErrorMessage };
export type { AppErrorMessageProps };
