import { color } from '@barguide/style-guide';

import { IS_TEST } from '@src/config/settings';

const strMessage = `%c\n👋 What can I help you build?`;
const strContact = `%c
Matthew Scholta
matthew.scholta@gmail.com

- Github: https://github.com/visormatt
- LinkedIn: https://linkedin.com/in/MatthewScholta
- Twitter: https://twitter.com/visormatt  \n
`;

/**
 * @description A message for the console
 */
const intro = () => {
  if (IS_TEST) return;

  const styleContact = 'color: default; font-size: 14px;';
  const styleMessage = `color: ${color.primary}; font-size: 18px;`;

  /* eslint-disable no-console */
  console.group('👀 Thank you for looking, lets connect!');
  console.log(strMessage, styleMessage);
  console.log(strContact, styleContact);
  console.groupEnd();
  /* eslint-enable no-console */
};

export { intro };
