import * as React from 'react';
import { color } from '@barguide/style-guide';

import { name } from '@root/package.json';
import { Icon } from '@src/types/icon';

export interface LogoProps extends Icon {}

/**
 * @name Logo
 * @description Logo
 */
const Logo: React.FC<LogoProps> = (props) => {
  const { className, fill, height, width, ...rest } = props;

  return (
    <svg
      {...rest}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 100 59"
    >
      <title>{name}</title>
      {/* <desc>{pkg.description}</desc> */}
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <path
          d="M72.573561,53.8100014 L67.7974434,43 L63.0213258,53.8100014 L57.7974434,53.8100014 L52.573561,53.8100014 L47.7974434,43 L43.0213258,53.8100014 L24.0228956,53.8100014 L47.7974434,0 L57.7974434,22.6334489 L67.7974434,0 L91.5719913,53.8100014 L72.573561,53.8100014 Z M7.10754499,21.7630003 L16.7229599, 8.8817842e-16 L19.5285978,0 L8.51036391,24.9380633 L7.10754499, 21.7630003 Z M9.82164089,28.3034712 L22.3267926,2.0539126e-15 L26.1647839,0 L11.7406366,32.6468202 L9.82164089,28.3034712 Z M28.7229599,0 L44.5719913,0 L20.7974434,53.8100014 L16.7974434, 44.7566218 L36.5719913, 0 L28.7229599,0 L28.7229599,8.8817842e-16 Z M28.7229599,8.8817842e-16 L28.7229599, 8.8817842e-16 L34.1647839, 0 L15.6106287,41.9944523 L12.8897168,35.83609 Z M5.35664415, 14.1239332 L0,2 L10.7132883,2 L5.35664415,14.1239332 Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

Logo.defaultProps = {
  fill: color.primary,
  height: 59,
  viewBox: '0 0 100 59',
  width: 100
};

export { Logo as default, Logo };
