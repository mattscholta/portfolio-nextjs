import * as React from 'react';
import classnames from 'classnames';
import { useRecoilValue } from 'recoil';

import { appAtom } from '@src/recoil/atoms/app';

import styles from './styles.module.css';

interface AppLoaderProps {
  className?: string;
  message?: string;
  state?: boolean;
}

/**
 * @name AppLoader
 * @description A generic loading component that uses a CSS box that
 * we spin using a CSS animation
 */
const AppLoader: React.FC<AppLoaderProps> = (props) => {
  const { className, message = 'Loading', state } = props;

  // Hooks
  const { loading } = useRecoilValue(appAtom);

  // Styles
  const tailwind = `u-flex u-items-center u-justify-center u-fixed u-inset-0`;
  const cssComponent = classnames(tailwind, className, styles.component, {
    [styles.visible]: state || loading
  });

  return (
    <div className={cssComponent}>
      <div className="u-flex u-flex-col u-items-center">
        <div className={styles.loader} />
        <p>{message}</p>
      </div>
    </div>
  );
};

export { AppLoader };
export type { AppLoaderProps };
