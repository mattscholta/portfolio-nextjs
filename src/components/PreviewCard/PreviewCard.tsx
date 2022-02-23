import * as React from 'react';
import classnames from 'classnames';
import Link from 'next/link';

import styles from './styles.module.css';

export interface PreviewCardProps {
  className?: string;
  description: string;
  image: string;
  slug: string;
  title: string;
}

/**
 * @name PreviewCard
 * @external https://www.w3schools.com/howto/howto_css_flip_box.asp
 * @description Preview cards that use a CSS flip to reveal a bit more data
 */
export const PreviewCard = (props: PreviewCardProps) => {
  const { className, description, image, slug, title } = props;

  // Styles
  const css = classnames(styles.card, className);

  return (
    <div className={css}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img
            alt={title}
            height={200}
            loading="eager"
            src={image}
            title={title}
            width={300}
          />
        </div>
        <div className={styles.back}>
          <Link href={`/portfolio/${slug}`}>
            <a className="u-flex u-flex-column">
              <h2 className="ui-heading medium">{title}</h2>
              <p className="u-flex-grow --u-overflow-ellipsis">{description}</p>
              <div className={styles.link}>Read More &#187;</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
