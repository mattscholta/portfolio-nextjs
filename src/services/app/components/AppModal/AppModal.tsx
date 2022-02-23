import * as React from 'react';
import classnames from 'classnames';
import { useRecoilState } from 'recoil';

import { modalAtom } from '@src/recoil/atoms/modal';

import styles from './styles.module.css';

export interface AppModalProps {
  className?: string;
}

/**
 * @name AppModal
 * @description We interact with a singleton for our Modals which allows
 * us to keep the UI consistent and prevents us from having to deal with
 * potentially stacking issues.
 */
export const AppModal = (props: AppModalProps) => {
  const { className } = props;

  // Hooks
  const [state, _setState] = useRecoilState(modalAtom);

  // Setup
  const { open } = state;

  // Styles
  const cssComponent = classnames(styles.component, className, {
    [styles.close]: !open,
    [styles.open]: open
  });

  return (
    <div className={cssComponent}>
      <div className={styles.content}>
        <h2 className="u-mb-2x">App Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugit
          nihil nesciunt quibusdam deleniti, adipisci, deserunt et aliquid
          aspernatur provident consequuntur, optio eaque ut debitis quo enim
          sequi dolores reiciendis?
        </p>
      </div>
    </div>
  );
};
