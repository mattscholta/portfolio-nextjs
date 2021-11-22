import * as React from 'react';
import { color } from '@barguide/style-guide';

import { Icon } from '@src/types/icon';

export interface StackOverflowProps extends Icon {}

/**
 * @name StackOverflow
 * @description StackOverflow
 */
const StackOverflow: React.FC<StackOverflowProps> = (props) => {
  const { className, fill, height, width, ...rest } = props;

  return (
    <svg
      {...rest}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 50 50"
    >
      <path
        d="M4.16666 32.3792V48.4375C4.16666 49.3 4.86666 50 5.72916 50H44.2708C44.6852 50 45.0827 49.8354 45.3757 49.5424C45.6687 49.2493 45.8333 48.8519 45.8333 48.4375V32.3792C45.8333 30.3125 42.7083 30.3104 42.7083 32.3792V46.875H7.29166V32.3792C7.29166 30.3125 4.16666 30.3125 4.16666 32.3792Z"
        fill={fill}
      />
      <path
        d="M13.8438 41.9708H34.1292C36.1958 41.9708 36.1979 38.8458 34.1292 38.8458H13.8438C11.7771 38.8458 11.775 41.9708 13.8438 41.9708ZM13.8354 32.3312C34.9875 36.6625 33.7063 36.4417 34.0146 36.4417C35.8833 36.4417 36.1604 33.725 34.3271 33.3479L14.4646 29.2687C12.4396 28.8542 11.8083 31.9146 13.8354 32.3312V32.3312ZM16.3625 21.5125C35.3646 30.9375 34.4708 30.7229 35.1667 30.7229C36.8125 30.7229 37.3333 28.4958 35.8646 27.7625L17.7583 18.7167C15.9146 17.7917 14.5125 20.5875 16.3625 21.5125V21.5125ZM20.9833 13.375L36.85 25.5854C38.4625 26.8292 40.4167 24.3875 38.7563 23.1104L22.8896 10.9C21.2521 9.63541 19.3438 12.1146 20.9833 13.375V13.375ZM43.1188 19.3937L31.1979 3.74166C29.9479 2.09791 27.4583 3.98958 28.7125 5.63541L40.6333 21.2875C41.875 22.9208 44.3813 21.0521 43.1188 19.3937Z"
        fill={fill}
      />
    </svg>
  );
};

StackOverflow.defaultProps = {
  fill: color.black,
  height: 41,
  width: 50
};

export { StackOverflow };
