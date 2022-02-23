import * as React from 'react';

// import { BlockQuote } from '@src/components/BlockQuote';

export interface SectionSoftwareProps {
  className?: string;
}

/**
 * @name SectionSoftware
 * @description Stateless Component / Pure Function
 */
export const SectionSoftware = (props: SectionSoftwareProps) => {
  const { className } = props;

  // Setup
  const propsLink = { rel: 'noopener noreferrer', target: '_blank' };

  return (
    <section className={className}>
      <h2 className="ui-heading">Software</h2>
      <span className="ui-subhead" />
      <p>
        I am actually pleasantly surprised how small this list is... These
        programs are at the <b>core</b> of everything I do daily. While we can
        write code in in VIM or a text editor, life is just better with the
        right tools.
      </p>

      {/*
      <BlockQuote>
        Give me six hours to chop down a tree and I will spend the first four
        sharpening the ax.
      </BlockQuote>
      */}

      <h3 className="ui-heading medium">
        <a {...propsLink} href="https://code.visualstudio.com/insiders">
          🧰 Visual Studio Code
        </a>
      </h3>
      <span className="ui-subhead" />
      <p>
        Is my editor of choice and <b>I could not be happier!</b> It 100% does
        everything I need it to and I am continuously impressed by the
        improvements I've seen to date.
      </p>

      <h3 className="ui-heading medium">
        <a {...propsLink} href="https://iterm2.com">
          <b className="u-text-black">$</b> Iterm2
        </a>
      </h3>
      <span className="ui-subhead" />
      <p>
        As far as terminal users go, I use it heavily every day. iTerm2 is free
        and full of features I use and many that I don't even know exist. Tabs,
        split-view, fast and reliable.
      </p>

      <h3 className="ui-heading medium">
        <a {...propsLink} href="https://www.docker.com/products/docker-desktop">
          🐳 Docker Desktop
        </a>
      </h3>
      <span className="ui-subhead" />
      <p>
        At the core of the modern development workflow is 🐳 Docker. I can't
        begin to explain how enjoyable a great docker and docker-compose
        workflow can be.
      </p>

      <h3 className="ui-heading medium">
        <a {...propsLink} href="https://www.figma.com">
          🎨 Figma
        </a>{' '}
        /{' '}
        <a {...propsLink} href="https://www.sketch.com">
          🎨 Sketch
        </a>
      </h3>
      <span className="ui-subhead" />
      <p>
        It's not that often that get to play designer but I do enjoy keeping up
        with the tools. Figma is available in the browser + app and fast, love
        it!
      </p>
    </section>
  );
};
