import * as React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

export interface AppErrorComponentProps {
  className?: string;
  message?: string;
}

/**
 * @name AppErrorComponent
 * @description Used to display errors to our user.
 */
export const AppErrorComponent = (props: AppErrorComponentProps) => {
  const { className, message } = props;

  // Styles
  const tailwind = 'u-center u-text-center u-block u-mx-auto u-my-4x u-text-14';
  const cssComponent = classnames(tailwind, className);

  // Handlers
  // const onClickRefresh = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   // window.location.reload();
  // };

  // 🔌 Short Circuit
  if (!message) return null;

  return (
    <div
      className={cssComponent}
      style={{
        maxWidth: 300
      }}
    >
      <h3>Sorry, we've encountered an error.</h3>
      <p>{message}</p>

      <Link href="/">
        <a>Go to the Homepage</a>
      </Link>

      <div className="u-flex u-flex-col u-gap-2x u-text-center u-m-2x">
        {/*

        <button onClick={onClickRefresh} type="button">
          Try Again?
        </button>
        */}
      </div>
    </div>
  );
};
