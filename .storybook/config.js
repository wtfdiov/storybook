import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

addParameters({
  backgrounds: [{ name: "Dark", value: "rgba(0, 0, 0)" }],
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});
