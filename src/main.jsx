import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/tailwind.scss";
import { Provider } from "react-redux";
import { store } from "@/store";
import router from "@/routes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
