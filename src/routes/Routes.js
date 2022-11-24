import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Product from "../pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default function Routes() {
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}
