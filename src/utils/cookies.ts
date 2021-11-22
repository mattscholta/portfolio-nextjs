/**
 * A simple function to set cookies w/o access to our React Hooks which
 * we need for our Apollo middleware which requests a new "id_token" when it
 * has expired as it's "short lived"
 */
export const setCookie = (name: string, value: string): void => {
  const date = new Date();
  const oneHour = 1000 * 60 * 60;

  date.setTime(date.getTime() + oneHour);

  const expires = 'expires=' + date.toUTCString();

  document.cookie = name + '=' + value + '; ' + expires + '; path=/';
};
