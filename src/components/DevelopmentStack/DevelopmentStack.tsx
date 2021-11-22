import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export interface DevelopmentStackProps {
  className?: string;
}

/**
 * @name DevelopmentStack
 * @description Stateless Component / Pure Function
 */
const DevelopmentStack: React.FC<DevelopmentStackProps> = (props) => {
  const { className } = props;

  // Styles
  const css = classnames(styles.component, className);

  return (
    <div className={css}>
      <h2 className="ui-heading medium">Technology / Tools</h2>
      <ul className="ui-list-tags">
        <li>Apollo</li>
        <li>Adobe Creative Suite</li>
        <li>Agile</li>
        <li>AWS</li>
        <li>Babel</li>
        <li>CSS</li>
        <li>Docker</li>
        <li>ElasticSearch</li>
        <li>Express</li>
        <li>Figma</li>
        <li>Google Analytics</li>
        <li>Google Tag Manger</li>
        <li>Git / Github</li>
        <li>GraphQL</li>
        <li>HTML</li>
        <li>Javascript</li>
        <li>JWT</li>
        <li>Kubernetes</li>
        <li>Lerna</li>
        <li>Node.js</li>
        <li>NoSQL</li>
        <li>NPM</li>
        <li>PostCSS</li>
        <li>React</li>
        <li>RecoilJS</li>
        <li>Redux</li>
        <li>REST</li>
        <li>Rollup</li>
        <li>SQL / MySQL</li>
        <li>Sketch</li>
        <li>Swarm</li>
        <li>TypeScript</li>
        <li>Webpack</li>
      </ul>
    </div>
  );
};

export { DevelopmentStack };
