import * as React from 'react';

interface AppErrorRedirectProps {
  className?: string;
  message?: string;
}

/**
 * @name AppErrorRedirect
 * @description This guy is used in our fetch logic
 */
const AppErrorRedirect: React.FC<AppErrorRedirectProps> = (props) => {
  const { message } = props;

  // 🔌 Short Circuit
  if (!message) return null;

  return <div className={props.className}>{message}</div>;
};

export { AppErrorRedirect };
export type { AppErrorRedirectProps };
