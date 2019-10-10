import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Page from ".";

describe("Curation Page", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: "Example Site",
          siteUrl: "https://example.dev",
          description: "This is an example of a site description.",
          nav: [{ name: "Example Link", url: "https://example2.dev/test" }]
        }
      },
      logo: {
        publicUrl: "/static/logo.svg"
      },
      allProvidersYaml: {
        edges: [
          {
            node: {
              id: "123",
              title: "Example Catergory",
              modal: "example-category"
            }
          }
        ]
      },
      providers: {
        edges: [
          {
            node: {
              id: "123",
              title: "Example Catergory",
              modal: "example-category",
              types: [
                {
                  title: "Example Provider Type",
                  modal: "example-provider-type",
                  packages: [
                    {
                      title: "Example Provider",
                      url: "https://example.dev/provider"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      consumers: {
        edges: [
          {
            node: {
              id: "321",
              author: "Name McNameson",
              title: "Example Consumer",
              url: "https://example.dev/consumer",
              code: "https://github.com/example/atom-consumer"
            }
          }
        ]
      }
    }));
  });

  it("renders as expected", () => {
    const tree = renderer.create(<Page />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
