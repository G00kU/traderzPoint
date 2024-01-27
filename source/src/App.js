import { green, purple, yellow } from "@mui/material/colors";
import "./App.css";
import { Navbar } from "./components/navBar";
import { HomePage } from "./pages/homePage";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2779a7",
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Bebas Neue"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar userName={"Guest"} />
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
