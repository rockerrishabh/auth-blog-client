import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RootLoader from "./components/loaders/rootLoader.tsx";
import Login from "./pages/login.tsx";
import Home from "./pages/home.tsx";
import Post from "./pages/post.tsx";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/userContext.tsx";
import Google from "./pages/google.tsx";
import Dashboard from "./pages/dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: RootLoader,
  },
  {
    path: "login",
    element: <Login />,
    loader: RootLoader,
  },
  {
    path: "post/:id",
    element: <Post />,
    loader: RootLoader,
  },
  {
    path: "/api/user/google/callback",
    element: <Google />,
    loader: RootLoader,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    loader: RootLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
);
