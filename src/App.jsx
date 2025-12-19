import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestrorantMenu from "./components/RestrorantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const currYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <p>
      Copyright &copy; {currYear}, Made with  by <strong>Amit</strong>
    </p>
  </footer>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restruant/:resid",element:<RestrorantMenu/> },
    ],
    errorElement: <Error />,
  },
]);

export default function App() {
  return <RouterProvider router={appRouter} />;
}
