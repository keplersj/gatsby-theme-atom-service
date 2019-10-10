import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Nav from ".";

describe("Nav", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: "Example Site",
          nav: [
            {
              name: "Example Link",
              url: "https://example.dev/"
            }
          ]
        }
      },
      allProvidersYaml: {
        edges: [
          {
            node: {
              id: "123",
              title: "Example Section",
              modal: "example"
            }
          }
        ]
      }
    }));
  });

  it("renders as expected", () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
