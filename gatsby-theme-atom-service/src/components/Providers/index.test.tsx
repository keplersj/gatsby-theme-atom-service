import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Providers from ".";

describe("Providers", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      providers: {
        edges: [
          {
            node: {
              id: "123",
              title: "Example Category",
              modal: "category",
              types: [
                {
                  title: "Example Type",
                  modal: "example",
                  packages: [
                    {
                      title: "Example Package",
                      url: "https://example.dev/provider"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    }));
  });

  it("renders as expected", () => {
    const tree = renderer.create(<Providers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
