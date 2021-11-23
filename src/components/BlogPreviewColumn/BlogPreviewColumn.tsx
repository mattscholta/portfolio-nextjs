import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';
import Link from 'next/link';

import { Star } from '@src/icons';
import { analytics } from '@src/utils/analytics';

import styles from './styles.module.css';

export interface BlogPreviewColumnProps {
  className?: string;
  post: any;
  small: boolean;
}

/**
 * @name BlogPreviewColumn
 * @description Stateless Component / Pure Function
 */
const BlogPreviewColumn: React.FC<BlogPreviewColumnProps> = (props) => {
  const { className, post, small } = props;
  const { slug, sticky, title } = post;

  // Setup
  // const copy = content?.substr(4);
  const copy = false;
  const link = `/posts/${slug}`;

  // Styles
  const css = classnames(styles.component, className);
  const cssHeading = classnames('u-flex', styles.heading);

  // Handlers
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget } = event;
    const { gaLabel } = currentTarget.dataset;

    analytics.event('blog-preview-column', 'click', gaLabel);
  };

  return (
    <Link href={link}>
      <a className={css} data-ga-label={slug} onClick={onClick}>
        <img
          alt={post.title || ''}
          className={styles.image}
          height={1250}
          loading="lazy"
          src={post.imageTemp}
          width={1880}
        />

        <div className="u-flex-grow">
          <div className={cssHeading}>
            {sticky && <Star fill={color.gray[7]} height={16} width={16} />}
            <h2>{title}</h2>
          </div>
          {/* <br /> */}
          {/* {!small && copy && <p>{copy}</p>} */}
        </div>
        <span className={styles.link}>Read More &#xbb;</span>
      </a>
    </Link>
  );
};

export { BlogPreviewColumn };
