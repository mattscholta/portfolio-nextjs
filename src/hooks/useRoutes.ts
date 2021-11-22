import { useRouter } from 'next/router';

export type Routes = 'about' | 'contact' | 'homepage' | 'photos';

/**
 * @name useRoutes
 * @description This hook is used to...
 */
export const useRoutes = (): {
  active: {
    [key in Routes]: boolean;
  };
} => {
  // Hooks
  const { pathname } = useRouter();

  /**
   * Useful for determining which route is active.
   */
  const active = {
    about: pathname === '/about',
    contact: pathname === '/contact',
    homepage: pathname === '/',
    photos: pathname === '/photos'
  };

  return {
    active
  };
};
