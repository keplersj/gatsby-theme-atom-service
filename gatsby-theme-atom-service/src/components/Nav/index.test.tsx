import * as React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import { useStaticQuery } from "gatsby";
import Nav from ".";

describe("Nav", () => {
  beforeEach(() => {
    (useStaticQuery as jest.Mock).mockImplementation(() => ({
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

  it("opens the drawer when the menu icon is pressed", async () => {
    const { getByLabelText, getByTestId } = render(<Nav />);

    const fireResult = fireEvent.click(getByLabelText("menu"));
    expect(fireResult).toBe(true);

    const drawer = await waitForElement(() => getByTestId("drawer-content"));

    // For some reason getFragment() isn't showing the drawer, so just snapshot it once it renders
    // Ideally I'd like to use `snapshot-diff` to show that pressing the hamburger menu icon, opens the drawer
    // But this will do for now
    expect(drawer).toMatchSnapshot();
  });
});
