import * as React from 'react';
import classnames from 'classnames';

import { isMobileDevice } from '@src/utils/device';

import styles from './styles.module.css';

export interface AppDropdownProps {
  content: any;
  dropdown: any;
}

/**
 * @name AppDropdown
 * @description A simple and reusable Dropdown component that takes the
 * target "content" and a "dropdown" which is rendered as the users
 * hovers or otherwise activates the "content area"
 */
export const AppDropdown = (props: AppDropdownProps) => {
  const { content: Content, dropdown: Dropdown } = props;

  // Hooks
  const [hover, setHover] = React.useState(false);

  // Styles
  const tailwind = 'u-flex u-h-full u-items-stretch u-relative';
  const cssComponent = classnames(tailwind, styles.component);
  const cssContainer = classnames(styles.container, { [styles.close]: !hover });

  // Handlers
  const onBlur = () => {
    if (hover) setHover(false);
  };

  const onClick = () => {
    setHover(!hover);
  };

  const onHover = () => {
    const isMobile = isMobileDevice();

    if (isMobile) return;
    if (!hover) setHover(true);
  };

  return (
    <div
      className={cssComponent}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onHover}
      onMouseEnter={onHover}
      onMouseLeave={onBlur}
    >
      <Content />
      <div className={cssContainer}>
        <Dropdown className={styles.dropdown} />
      </div>
    </div>
  );
};
