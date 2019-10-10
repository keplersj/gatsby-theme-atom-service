import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Head from ".";

describe("Head", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: "Example Site",
          description: "This is a an example site description.",
          siteUrl: "https://example.dev/"
        }
      }
    }));
  });

  it("renders as expected", () => {
    // Wrap the head component in a div so that the React Helmet serializer has something to read from
    const tree = renderer
      .create(
        <div>
          <Head />
        </div>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
