import React from "react";
import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./Routes";
import "./global.css";

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default App;
