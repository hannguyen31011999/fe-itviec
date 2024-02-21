import { createTheme } from "@mui/material/styles";

// declare override style
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    desktop: true;
    laptop: true;
    tablet: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    body: React.CSSProperties;
    small: React.CSSProperties;
    caption: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    title1: React.CSSProperties;
    title2: React.CSSProperties;
    body: React.CSSProperties;
    small: React.CSSProperties;
    caption: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    body: true;
    small: true;
    caption: true;
  }
}

// constants css

export const linearGradient = {
  100: "linear-gradient(269.85deg, #54151C 0%, #121212 54.89%)",
};

export const background = {
  black: "#000",
  white: "#fff",
};

export const textColor = {
  100: "#fff",
};

export const styleTypography = (
  fontSize: string,
  lineHeight: string,
  letterSpacing?: string
) => ({
  fontSize,
  lineHeight,
  letterSpacing: letterSpacing || "unset",
  color: textColor[100],
  fontFamily: "Roboto",
});

export const spacing = {
  100: "12px",
  200: "24px",
  300: "32px",
};

const theme = createTheme({
  typography: {
    h1: styleTypography("44px", "52.8px"),
    h2: styleTypography("40px", "48px"),
    h3: styleTypography("32px", "38.4px"),
    h4: styleTypography("29px", "34.8px"),
    h5: styleTypography("26px", "31.2px"),
    h6: styleTypography("23px", "27.6px"),
    title1: styleTypography("20px", "24px"),
    title2: styleTypography("18px", "21.6px"),
    body: styleTypography("16px", "19.2px"),
    small: styleTypography("14px", "16.8px"),
    caption: styleTypography("12px", "14.4px"),
  },
  breakpoints: {
    values: {
      xs: 375,
      xl: 1200,
      lg: 992,
      sm: 576,
      md: 767,
      desktop: 1440,
      laptop: 1024,
      tablet: 920,
    },
  },
});

export default theme;
