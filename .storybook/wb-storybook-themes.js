import {create} from "storybook/theming";
/**
 * Builds HSK AI documentation-site chrome while retaining the inherited WB
 * preview themes used to render historical examples. These are NOT production
 * PWA/Android theme tokens or a mandate to re-theme the application.
 */
function makeTheme(wbTheme) {
    const dark = wbTheme === "syl-dark";
    // Verified existing product values: branding/hsk-ai-logo.svg gradient end
    // (#C02F32) on light; PWA dark --hsk-cinnabar (#20BCEB) on dark.
    // The light documentation accent is chosen for readable contrast on white.
    const documentationAccent = dark ? "#20BCEB" : "#C02F32";

    return create({
        base: dark ? "dark" : "light",
        fontBase: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
        brandTitle: "HSK AI Design System",
        brandUrl: "/",
        brandImage: "./hsk-ai-logo.svg",
        colorPrimary: documentationAccent,
        colorSecondary: documentationAccent,
        barSelectedColor: documentationAccent,
        barHoverColor: documentationAccent,
        // App-wide background (sidebar, toolbar, content, and docs pages —
        // appContentBg flows into the docs container via docs.theme)
        ...(dark
            ? {}
            : {
                  appBg: "#EDEDEE",
                  appContentBg: "#EDEDEE",
                  appPreviewBg: "#EDEDEE",
                  barBg: "#EDEDEE",
              }),
    });
}

const themes = {
    "default": makeTheme("default"),
    "thunderblocks": makeTheme("thunderblocks"),
    "syl-dark": makeTheme("syl-dark"),
};

/**
 * Returns the Storybook UI theme matching a WB theme name, falling back to
 * the repo's default theme (thunderblocks).
 */
export function getStorybookTheme(wbTheme) {
    return themes[wbTheme] ?? themes["thunderblocks"];
}
