import * as React from 'react';

export type PictureAttributes = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export interface AppPictureProps extends PictureAttributes {
  alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt'];
  loading?: React.ImgHTMLAttributes<HTMLImageElement>['loading'];
  jpg?: React.SourceHTMLAttributes<HTMLElement>['srcSet'];
  png?: React.SourceHTMLAttributes<HTMLElement>['srcSet'];
  webp?: React.SourceHTMLAttributes<HTMLElement>['srcSet'];
}

/**
 * @name AppPicture
 * @external https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 * @description This component just wraps up the some of the messy markup
 * required for making use of modern web images... Only one image will be
 * shown the user, going from the top down, so we put the advanced "webp" up
 * top, then basic support of "srcSet" and lastly a fallback to a standard IMG
 */
export const AppPicture = (props: AppPictureProps) => {
  const { alt = '', className, jpg, loading, png, webp, ...rest } = props;

  if (!jpg && !png) {
    const message = 'A fallback image source of type JPG or PNG must be used';
    throw new Error(message);
  }

  return (
    <picture {...rest} className={className}>
      {webp && <source srcSet={webp} type="image/webp" />}
      {jpg && <source srcSet={jpg} type="image/jpeg" />}
      {png && !jpg && <source srcSet={png} type="image/png" />}
      <img alt={alt} loading={loading || 'lazy'} src={jpg || png} />
    </picture>
  );
};
