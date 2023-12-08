import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import EditHtmlCode from "./EditHtmlCode";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EditHtmlCode />
      </ThemeProvider>
    </>
  );
}

export default App;
