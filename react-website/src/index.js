import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FormProvider } from "./Reducers/FormContext";

ReactDOM.render(
  <FormProvider>
    <App />
  </FormProvider>,
  document.getElementById("root")
);
