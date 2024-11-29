import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/homePage/HomePage";
import ProductsPage from "../components/pages/productsPage/ProductsPage";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import AdminPage from "../components/pages/adminPage/AdminPage";
import CartPage from "../components/pages/cartPage/CartPage";
import FavoritePage from "../components/pages/favoritesPage/FavoritePage";
import ProfilePage from "../components/pages/profilePage/ProfilePage";

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
    {
      link: "/Profile",
      element: <ProfilePage />,
      id: 5,
    },
    {
      link: "/Favorites",
      element: <FavoritePage />,
      id: 6,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 7,
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
