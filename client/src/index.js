import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import store from "./redux/store";
import { User } from "./UserContext/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <User>
        <Provider store={store}>
          <App />
        </Provider>
      </User>
    </BrowserRouter>
  </ChakraProvider>
);

