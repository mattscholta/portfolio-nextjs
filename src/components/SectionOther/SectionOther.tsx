import * as React from 'react';
import classnames from 'classnames';

import { data as images } from '@src/data/images';

import styles from './styles.module.css';

export interface SectionOtherProps {
  className?: string;
}

/**
 * @name SectionOther
 * @description Stateless Component / Pure Function
 */
const SectionOther: React.FC<SectionOtherProps> = (props) => {
  const { className } = props;

  // Styles
  const classesImage = classnames('shadow', styles.image);

  // Markup
  const renderImage = (src: string) => (
    <img
      alt=""
      className={classesImage}
      key={src}
      loading="lazy"
      src={src}
      width={120}
    />
  );

  return (
    <section className={className}>
      <h2 className="ui-heading">Free Time</h2>
      <span className="ui-subhead" />

      <p>
        A true <b>California native</b> you can find me and the family at the
        beach! When we're not at the beach there is a good chance I am hauling
        ass along the coast on my motorcycle 🏍️💨.
      </p>

      <div className={styles.images}>{images.map(renderImage)}</div>
    </section>
  );
};

export { SectionOther as default, SectionOther };
