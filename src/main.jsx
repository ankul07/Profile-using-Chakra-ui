import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        textDecoration: "none", // Removes text decoration from all Link components
        _hover: {
          textDecoration: "none", // Prevents underline on hover
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <Router>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Router>
);
