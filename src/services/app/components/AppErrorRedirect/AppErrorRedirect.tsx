import * as React from 'react';

export interface AppErrorRedirectProps {
  className?: string;
  message?: string;
}

/**
 * @name AppErrorRedirect
 * @description This guy is used in our fetch logic
 */
export const AppErrorRedirect = (props: AppErrorRedirectProps) => {
  const { message } = props;

  // 🔌 Short Circuit
  if (!message) return null;

  return <div className={props.className}>{message}</div>;
};
