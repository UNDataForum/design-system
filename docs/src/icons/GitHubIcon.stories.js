import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from 'theme-ui';
import { GitHubIcon } from '@undataforum/components';

storiesOf('Icons/GitHubIcon', module)
  .add('scale to height', () => (
    <Box sx={{ height: 64, m: 2 }}>
      <GitHubIcon scaleTo="height" />{' '}
    </Box>
  ))
  .add('scale to width', () => (
    <Box sx={{ width: 64, m: 2 }}>
      <GitHubIcon scaleTo="width" />
    </Box>
  ))
  .add('custom color', () => (
    <Box sx={{ height: 64, m: 2, color: 'primary' }}>
      <GitHubIcon scaleTo="height" />
    </Box>
  ));