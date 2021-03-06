import React from 'react';
import { Heading, Image, ThemeProvider } from 'theme-ui';
import preset from '@undataforum/preset';
import { ProfilePreview } from '@undataforum/components';

const ReallyLongStrings = () => (
  <ThemeProvider theme={preset}>
    <ProfilePreview
      profile={{
        avatar: (
          <Image
            alt="Really really really really really really really really really really long name"
            sx={{ borderRadius: '50%', height: 128, width: 128 }}
            src="/avatar7.png"
          />
        ),
        name: (
          <Heading as="div" sx={{ fontSize: 4, textAlign: 'center' }}>
            Really really really really really really really really really
            really long name
          </Heading>
        ),
        jobtitle:
          'Really really really really really really really really really really long jobtitle',
        organization:
          'Really really really really really really really really really really long organization',
        badges: [
          'Nulla officia fugiat',
          'Dolor voluptate proident',
          'Laboris anim cillum et dolore',
          'Magna excepteur',
          'Fugiat officia',
          'Ut veniam nostrud',
          'Ad ut labore nulla dolor velit',
          'Ex officia',
          'Aliquip',
          'Incididunt consectetur',
        ],
      }}
      m={2}
    />
  </ThemeProvider>
);

export default ReallyLongStrings;
