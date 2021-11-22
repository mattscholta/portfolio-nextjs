/* tslint:disable: max-line-length */

import * as React from 'react';
import { color } from '@barguide/style-guide';

import { Icon } from '@src/types/icon';

export interface HeartProps extends Icon {}

/**
 * @name Star
 * @description Star
 */
const Star: React.FC<HeartProps> = (props) => {
  const { className, fill, height, width, ...rest } = props;

  return (
    <svg
      {...rest}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 50 50"
    >
      <title>Star</title>
      <desc>Location ratings</desc>

      <path
        d="M25.0014 0L31.7851 19.0988H50L35.1372 30.3159L40.4522 50L25.0014 38.1975L9.55343 50L14.8656 30.3159L0 19.0988H18.2149L25.0014 0Z"
        fill={fill}
      />
    </svg>
  );
};

Star.defaultProps = {
  fill: color.primary,
  height: 50,
  width: 50
};

export { Star };
