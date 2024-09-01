import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Authprovider } from "./context api/authContext.jsx";
import { CartContextProvider } from "./context api/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <Authprovider>
    <CartContextProvider>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>,
      </BrowserRouter>
    </CartContextProvider>
  </Authprovider>
);
