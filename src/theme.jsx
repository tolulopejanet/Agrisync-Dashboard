import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens(ctrl k ctrl g)
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        indigo: {
          100: "#d9e3ce",
          200: "#b4c89d",
          300: "#8eac6c",
          400: "#69913b",
          500: "#43750a", //main color(dark)
          600: "#365e08",
          700: "#284606",
          800: "#1b2f04",
          900: "#0d1702",
        },
        primary: {
          100: "#e8f7d9",
          200: "#d1f0b3",
          300: "#69913b66",
          400: "#a4e167",
          500: "#8dd941", //main color(light)
          600: "#71ae34",
          700: "#558227",
          800: "#38571a",
          900: "#1c2b0d",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },

        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#71ae34",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#8dd941",
          400: "#868dfb",
          500: "#8dd941",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
      }
    : {
        indigo: {
          100: "#0d1702",
          200: "#1b2f04",
          300: "#284606",
          400: "#365e08",
          500: "#43750a", //main color(dark)
          600: "#69913b",
          700: "#8eac6c",
          800: "#b4c89d",
          900: "#d9e3ce",
        },
        primary: {
          100: "#1c2b0d",
          200: "#38571a",
          300: "#558227",
          400: "#71ae34",
          500: "#000000", //main color(light)
          600: "#a4e167",
          700: "#bbe88d",
          800: "#6bb02a",
          900: "#e8f7d9",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#ebe7e7",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#1c2b0d",
          400: "#535ac8",
          500: "#ffffff",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.indigo[700],
              main: colors.indigo[500],
              light: colors.indigo[100],
            },
            background: {
              default: colors.indigo[800],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.indigo[700],
              main: colors.indigo[500],
              light: colors.indigo[100],
            },
            background: {
              default: "#dddddd",
            },
          }),
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});
export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
