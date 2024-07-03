import React, { useState } from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Root = () => (
  <div>
    <h1>My App</h1>
    <Outlet />
  </div>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <Root />
        </PrivateRoute>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: (<PrivateRoute isAuthenticated={!isAuthenticated} fallback="/">
        <Login />
      </PrivateRoute>),
    },
  ]);

  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
