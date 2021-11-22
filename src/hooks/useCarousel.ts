import * as React from 'react';
import { Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';

type CarouselOpts = SwiperOptions;

/**
 * @name useCarousel
 * @external https://swiperjs.com/swiper-api
 * @description A hook for interacting with the Swiper API
 */
const useCarousel = (container: string, opts: CarouselOpts): void => {
  // Setup
  Swiper.use([Navigation, Pagination]);

  // Life Cycle
  React.useEffect(() => {
    const swiper = new Swiper(container, opts);

    return () => {
      swiper.destroy();
    };
  }, []);
};

export { useCarousel };
export type { CarouselOpts };
