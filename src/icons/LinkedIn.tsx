import * as React from 'react';
import { color } from '@barguide/style-guide';

import { Icon } from '@src/types/icon';

export interface LinkedInProps extends Icon {}

/**
 * @name LinkedIn
 * @description LinkedIn
 */
const LinkedIn: React.FC<LinkedInProps> = (props) => {
  const { className, color, fill, height, width, ...rest } = props;

  return (
    <svg
      {...rest}
      className={className}
      height={height}
      width={width}
      viewBox="0 0 50 50"
    >
      {/* <title>Matthew D. Scholta on LinkedIn</title> */}
      {/* <desc>LinkedIn Icon</desc> */}
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero">
          <path
            d="M46.1478327,0 L3.67820462,0 C1.64875462,0 0,1.6086089 0, 3.5920292 L0, 46.2402381 C0,48.2253888 1.64875462,49.83642 3.67820462,49.83642 L46.1478327, 49.83642 C48.1807435,49.83642 49.8371123,48.2253888 49.8371123,46.2402381 L49.8371123,3.5920292 C49.8371123,1.6086089 48.1807435,0 46.1478327,0"
            fill={fill}
          />
          <path
            d="M10.8247396,6.92307692 C13.1885088,6.92307692 15.1085954, 8.84350954 15.1085954,11.2076247 C15.1085954,13.5734703 13.1885088, 15.4945951 10.8247396, 15.4945951 C8.45612538, 15.4945951 6.53846154,13.5734703 6.53846154,11.2076247 C6.53846154,8.84350954 8.45612538,6.92307692 10.8247396, 6.92307692 L10.8247396, 6.92307692 Z M7.12750038,18.7457293 L14.5192104,18.7457293 L14.5192104, 42.5291228 L7.12750038, 42.5291228 L7.12750038, 18.7457293 Z"
            fill={color}
          />
          <path
            d="M19.2307692,18.6687305 L26.3217304,18.6687305 L26.3217304, 21.9181343 L26.4200188,21.9181343 C27.4063646,20.0485764 29.8178935,18.0769231 33.4137296,18.0769231 C40.8988831, 18.0769231 42.2808058,23.0027687 42.2808058,29.4064026 L42.2808058,42.452124 L34.8942869,42.452124 L34.8942869, 30.8862674 C34.8942869,28.1269217 34.8434119,24.5795376 31.0530754,24.5795376 C27.2063269,24.5795376 26.6172881, 27.5842585 26.6172881,30.6865756 L26.6172881, 42.452124 L19.2307692,42.452124 L19.2307692,18.6687305"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
};

LinkedIn.defaultProps = {
  color: color.white,
  fill: color.black,
  height: 50,
  width: 50
};

export { LinkedIn };
