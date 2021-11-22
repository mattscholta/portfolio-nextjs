import * as React from 'react';
import { color } from '@barguide/style-guide';

import { Icon } from '@src/types/icon';

export interface HamburgerProps extends Icon {}

/**
 * @name Hamburger
 * @description Simple component that renders out an SVG icon
 */
const Hamburger: React.FC<HamburgerProps> = (props) => {
  const { className, fill, height = 50, width = 50, ...rest } = props;

  // Setup
  const barHeight = height / 8;
  const middleY = height / 2 - barHeight / 2;

  return (
    <svg
      {...rest}
      className={className}
      height={height}
      id="my_element"
      viewBox={`0 0 ${height} ${width}`}
      width={width}
    >
      <title>Menu</title>
      {/* <desc>Navigation "menu" icon</desc> */}
      <rect fill={fill} height={barHeight} width={width} x="0%" y="0%" />
      <rect fill={fill} height={barHeight} width={width} x="0%" y={middleY} />
      <rect
        fill={fill}
        height={barHeight}
        width={width}
        x="0%"
        y={height - barHeight}
      />
    </svg>
  );
};

Hamburger.defaultProps = {
  fill: color.primary,
  height: 50,
  width: 50
};

export { Hamburger };
