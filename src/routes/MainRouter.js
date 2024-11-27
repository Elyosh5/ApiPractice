import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/homePage/HomePage";
import ProductsPage from "../components/pages/productsPage/ProductsPage";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import AdminPage from "../components/pages/adminPage/AdminPage";

const MainRouter = () => {
  const PUBLIC = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
    {
      link: "/Products",
      element: <ProductsPage />,
      id: 3,
    },
    {
      link: "/About",
      element: <AboutPage />,
      id: 4,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((item) => (
        <Route path={item.link} element={item.element} id={item.id} />
      ))}
    </Routes>
  );
};

export default MainRouter;
