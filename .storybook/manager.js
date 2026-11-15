/**
 * Configuration of storybook addons.
 */
import {addons} from "storybook/manager-api";
import {getStorybookTheme} from "./wb-storybook-themes";

/**
 * Configures the HSK AI brand identity for the documentation site. The
 * preview uses legacy WB rendering dependencies for historic MDX examples.
 * @see https://storybook.js.org/docs/react/configure/theming
 */
addons.setConfig({
    // Matches initialGlobals.theme in preview.tsx
    theme: getStorybookTheme("thunderblocks"),
    sidebar: {
        showRoots: true,
    },
});

// Listen to theme changes and update the Storybook UI theme dynamically
addons.register("theme", (api) => {
    api.on("globalsUpdated", ({globals}) => {
        addons.setConfig({theme: getStorybookTheme(globals.theme)});
    });
});
