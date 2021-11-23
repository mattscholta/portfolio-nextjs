import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';
import Link from 'next/link';

import { Star } from '@src/icons';
import { analytics } from '@src/utils/analytics';

import styles from './styles.module.css';

export interface BlogPreviewRowProps {
  className?: string;
  post: any;
  small: boolean;
}

/**
 * @name BlogPreviewRow
 * @description Stateless Component / Pure Function
 */
const BlogPreviewRow: React.FC<BlogPreviewRowProps> = (props) => {
  const { className, post } = props;
  const { slug, sticky, title } = post;

  // Setup
  const link = `/posts/${slug}`;

  // Styles
  const css = classnames('u-flex', styles.component, className);
  const cssCol = classnames('u-flex u-flex-column u-flex-grow', styles.details);

  // Handlers
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget } = event;
    const { gaLabel } = currentTarget.dataset;

    analytics.event('blog-preview-row', 'click', gaLabel);
  };

  // Markup
  const renderImage = () => {
    if (!post.images[0].url) return null;

    return (
      <div className={styles.image}>
        <img
          alt={title || ''}
          height={1250}
          loading="lazy"
          src={post.images[0].url}
          title={`${title}, Read more` || ''}
          width={1880}
        />
      </div>
    );
  };

  return (
    <Link href={link}>
      <a className={css} data-ga-label={slug} onClick={onClick}>
        {renderImage()}
        <div className={cssCol}>
          <h2>
            {sticky && <Star fill={color.gray[7]} height={16} width={16} />}
            {title}
          </h2>
          <span className={styles.link}>Read More &#xbb;</span>
        </div>
      </a>
    </Link>
  );
};

export { BlogPreviewRow };
