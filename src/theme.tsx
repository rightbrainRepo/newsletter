import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#455a64",
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
        disableTouchRipple: true,
        focusRipple: true,
      },
      styleOverrides: {
        root: {
          "&:active": {
            boxShadow: "none",
          },
          "&:focus": {
            outline: "none",
          },
          color: "#0047FF",
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "transparent !important",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: () => `
      body, html {
        width: 100%;
        font-size: 14px;
      }
        ul {
          list-style-type: none;
        }
        ul, li {
          margin:0;
          padding: 0;
        }
      `,
    },
  },
});

export default theme;
