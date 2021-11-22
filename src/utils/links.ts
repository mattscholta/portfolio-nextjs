/**
 * @name getSrcSet
 * @description Get a set of images that we can use for a more responsive
 * rendering of images
 */
export const getSrcSet = (image: string) => {
  const sizes = [1500, 1280, 640, 320];
  const paths = sizes.map(
    (size) => `${image?.replace('1500', `${size}`)} ${size}w`
  );

  return paths.join(',');
};
