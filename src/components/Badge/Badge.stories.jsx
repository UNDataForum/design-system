import React from "react";
import { storiesOf } from "@storybook/react";
import { NavLink, MemoryRouter } from "react-router-dom";
import Badge from "./Badge";
import Box from "../Box";

storiesOf("Badge", module)
  .addDecorator(story => <Box m={1}>{story()}</Box>)
  .add("default color", () => <Badge href="#">default color</Badge>)
  .add("primary color", () => (
    <Badge color="primary" href="#">
      primary color
    </Badge>
  ))
  .add("blue", () => (
    <Badge color="blue" href="#">
      blue
    </Badge>
  ))
  .add("green", () => (
    <Badge color="green" href="#">
      green
    </Badge>
  ))
  .add("red", () => (
    <Badge color="red" href="#">
      red
    </Badge>
  ))
  .add("yellow", () => (
    <Badge color="yellow" href="#">
      yellow
    </Badge>
  ))
  .add("gray", () => (
    <Badge color="gray" href="#">
      gray
    </Badge>
  ))
  .add("black", () => (
    <Badge color="black" href="#">
      gray
    </Badge>
  ))
  .add("invalid color", () => (
    <Badge color="purple" href="#">
      invalid color
    </Badge>
  ))
  .add("custom anchor", () => (
    <MemoryRouter>
      <Badge
        href="#"
        anchor={({ href, children }) => <NavLink to={href}>{children}</NavLink>}
      >
        custom anchor
      </Badge>
    </MemoryRouter>
  ));
