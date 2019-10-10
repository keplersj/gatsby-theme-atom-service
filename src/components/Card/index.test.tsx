import * as React from "react";
import renderer from "react-test-renderer";
import { Card } from ".";

describe("Card", () => {
  describe("with only required props", () => {
    it("renders as expected", () => {
      const tree = renderer
        .create(
          <Card
            title="Test"
            links={[{ name: "Test Lint", url: "https://example.dev/" }]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with all props", () => {
    it("renders as expected", () => {
      const tree = renderer
        .create(
          <Card
            title="Test"
            subtitle="This is a test subtitle"
            links={[{ name: "Test Lint", url: "https://example.dev/" }]}
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
