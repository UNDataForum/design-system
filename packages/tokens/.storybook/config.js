import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
  options: {
    panelPosition: 'bottom',
  },
});

function loadStories() {
  const req = require.context('../src', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y);

configure(loadStories, module);
