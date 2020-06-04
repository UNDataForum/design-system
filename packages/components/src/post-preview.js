import React from 'react';
import { node, shape, string } from 'prop-types';
import { Button, Flex, Text } from 'theme-ui';

import Link from './link';

/**
 * The variant prop applies to buttons and badges only.
 * Text and background color are done via `color` and `bg`.
 *
 * There are no restrictions on what the variants can be called except that the default variant is called `primary`.
 * If you use @undataforum/preset you can use variants `primary` and `secondary` out of the box.
 * In your project you need to add custom variants under the `badges` and `buttons` key.
 */

// How margins work in this component:
// What the title prop renders (heading) may have no top margin, only bottom margin.
// What the description prop renders (paragraph) may have no top or bottom margin.
const PostPreview = ({ post, variant = 'primary', ...props }) => {
  const mb = post.description ? 3 : 0;
  return (
    <Flex
      {...props}
      sx={{
        flexDirection: 'column',
        fontFamily: 'body',
      }}
    >
      {post.title}
      {post.authors && post.authors}
      <Text as="time" sx={{ display: 'block', mb }}>
        {post.date}
      </Text>
      {post.description && post.description}
      {post.href && (
        <Flex
          sx={{
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            as={Link}
            sx={{
              alignSelf: ['stretch', 'flex-start'],
              whiteSpace: 'nowrap',
            }}
            href={post.href}
            variant={variant}
          >
            Read on
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

PostPreview.propTypes = {
  post: shape({
    title: node.isRequired,
    date: string.isRequired,
    authors: node,
    description: node,
    href: string,
  }).isRequired,
  variant: string,
};

export default PostPreview;
