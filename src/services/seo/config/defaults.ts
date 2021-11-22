import { CLIENT_BASE_URL } from '@src/config/settings';

/**
 * @external https://ahrefs.com/blog/seo-meta-tags/
 * @description This is the base SEO structure
 */
const defaults = {
  author: 'BarGuide.io',
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur magnam modi earum. Doloribus culpa, facilis dolor veritatis quae labore accusamus placeat beatae ipsa officia laboriosam rem, necessitatibus harum? Cupiditate.`,
  image: `${CLIENT_BASE_URL}/images/jpg/shareable-v2.jpg`,
  robots: 'index, follow',
  title: `BarGuide - The premiere resource for an adult beverage.`
};

export { defaults };
