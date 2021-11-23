import { CLIENT_CLOUDINARY } from '@src/config/constants';

export interface PortfolioPreview {
  description: string;
  image: string;
  slug: string;
  title: string;
}

const data: PortfolioPreview[] = [
  {
    description: `React, GraphQL and a Monorepo of NPM packages working across multiple applications and microservices.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/thredup-cms.webp`,
    slug: 'content-management-system',
    title: 'Content Management System'
  },
  {
    description: `A Progressive Web Application built performance, reliability, enhanced developer productivity, and long term maintainability.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/thredup-pwa.webp`,
    slug: 'progressive-web-app',
    title: 'Progressive Web App'
  },
  {
    description: `A code level abstraction to the Style Guide that enforces a more consistent UI/UX, and reduces code thus improving performance.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/thredup-style-guide.webp`,
    slug: 'css-style-guide',
    title: 'CSS Style Guide'
  },
  {
    description: `Implementation of LernaJS, "A tool for managing JavaScript projects with multiple packages".`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/monorepo.webp`,
    slug: 'npm-monorepo',
    title: 'NPM Monorepo'
  },
  {
    description: `A data driven approach to finding a drink nearby, where ever that may be.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/barguide.webp`,
    slug: 'bar-guide',
    title: 'BarGuide.io'
  },
  {
    description: `A Command Line code generator, wrapped up in a NPM package. Generate consistent and customizable boilerplate code/templates for teams & projects.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/generator.webp`,
    slug: 'npm-generator',
    title: 'NPM Generator'
  },
  {
    description: `An online and mobile tool for visualizing data and creating custom data sets for sharing across social networks.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/google-databoard.webp`,
    slug: 'google-databoard',
    title: 'Google Databoard'
  },
  {
    description: `Online training platform for big box retailer employees to learn about Google products and the broader ecosystem.`,
    image: `${CLIENT_CLOUDINARY}/v1614502421/mattscholta/thumbnails/webp/google-trainup.webp`,
    slug: 'google-train-up',
    title: 'Google TrainUP'
  }
];

export { data };
