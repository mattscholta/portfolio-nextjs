import * as React from 'react';
import { color } from '@barguide/style-guide';

import { Icon } from '@src/types/icon';
import { menu } from './animations';

export interface IconListProps extends Icon {}

export interface IconListState {
  active: boolean;
}

/**
 * @name IconList
 * @description Simple component that renders out an SVG icon
 */
class IconList extends React.Component<IconListProps, IconListState> {
  public static defaultProps: any;

  public state = {
    active: false
  };

  public node = React.createRef<SVGSVGElement>();

  public svg: any;

  public onClick = () => {
    const { active } = this.state;
    // const svgBox = this.svg.bbox();

    const direction = active ? 'from' : 'to';
    const filter = (child: any) => child.type === 'rect';
    const rects = this.svg.children().filter(filter);

    rects.forEach((child: any, i: number) => {
      const animation = menu[i];

      if (animation) {
        const { rotate } = animation[direction];
        // const { rotate, translate } = animation[direction];
        child.animate(300).rotate(rotate);
      }

      this.setState({ active: !active });
    });
  };

  // public componentDidMount() {
  //   if ('SVG' in window) {
  //     this.svg = window.SVG.adopt(this.node.current);
  //   } else {
  //     this.svg = this.node.current;
  //   }
  // }

  public render() {
    const { className, height = 50, width = 50, ...rest } = this.props;

    // Setup
    const barHeight = height / 8;
    const middleY = height / 2 - barHeight / 2;

    return (
      <svg
        {...rest}
        className={className}
        height={height}
        id="my_element"
        onClick={this.onClick}
        ref={this.node}
        viewBox={`0 0 ${height} ${width}`}
        width={width}
      >
        <title>Menu</title>
        <desc>Navigation "menu" icon</desc>
        <rect
          fill={color.primary}
          height={barHeight}
          width={width}
          x="0%"
          y="0%"
        />
        <rect
          fill={color.primary}
          height={barHeight}
          width={width}
          x="0%"
          y={middleY}
        />
        <rect
          fill={color.primary}
          height={barHeight}
          width={width}
          x="0%"
          y={height - barHeight}
        />
      </svg>
    );
  }
}

IconList.defaultProps = {
  fill: color.primary,
  height: 50,
  width: 50
};

export default IconList;
