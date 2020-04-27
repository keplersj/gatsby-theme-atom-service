import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Header from ".";

describe("Header", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: "Example Site",
          description: "This is an example site description.",
        },
      },
      logo: {
        publicURL: "/static/logo.svg",
      },
    }));
  });

  it("renders as expected", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
