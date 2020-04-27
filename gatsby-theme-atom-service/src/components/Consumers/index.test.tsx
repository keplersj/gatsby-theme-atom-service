import * as React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery } from "gatsby";
import Consumers from ".";

describe("Consumers", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
      consumers: {
        edges: [
          {
            node: {
              id: "123",
              author: "Namey McNameson",
              title: "Example Consumer",
              url: "https://example.dev/consumer",
              code: "https://github.dev/example/consumer",
            },
          },
        ],
      },
    }));
  });

  it("renders as expected", () => {
    const tree = renderer.create(<Consumers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
