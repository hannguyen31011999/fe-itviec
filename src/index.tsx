import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import { persistor, store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/theme";
import CloseIcon from "@mui/icons-material/Close";
import "./style/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={<></>}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <App />
          <ToastContainer
            closeOnClick
            draggable
            hideProgressBar={false}
            limit={3}
            newestOnTop={false}
            position="top-right"
            rtl={false}
            theme="colored"
            closeButton={(props) => (
              <Button
                sx={{
                  padding: "0px",
                  height: "24px",
                  width: "auto",
                  minWidth: "auto",
                }}
              >
                <CloseIcon />
              </Button>
            )}
          />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
