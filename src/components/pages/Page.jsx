import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";
import Head from "../Head";

const Page = ({ title, description, children }) => (
  <Box my={[3, 4]}>
    <Head title={title} description={description} />
    {children}
  </Box>
);

Page.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Page;