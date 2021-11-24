declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ga: any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    IntersectionObserver: any;
  }
}
