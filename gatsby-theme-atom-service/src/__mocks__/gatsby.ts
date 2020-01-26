import * as React from "react";
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    ({
      // these props are invalid for an `a` tag
      /* eslint-disable @typescript-eslint/no-unused-vars */
      /* eslint-disable no-unused-vars */
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      /* eslint-enable no-unused-vars */
      to,
      ...rest
    }): React.ReactElement =>
      React.createElement("a", {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
