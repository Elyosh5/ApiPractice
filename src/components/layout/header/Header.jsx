import React from "react";
import scss from "./Header.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className={scss.header}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.logo}>
              <h1>ENSCENT</h1>
            </div>
            <div className={scss.nav}>
              <NavLink to="/admin">
                <AdminPanelSettingsOutlinedIcon className={scss.icon} />
              </NavLink>
              <NavLink to="/">
                <a href="">HOME</a>
              </NavLink>
              <NavLink to="Products">
                <a href="">PRODUCTS</a>
              </NavLink>
              <NavLink to="About">
                <a href="">ABOUT</a>
              </NavLink>
            </div>
            <div className={scss.actions}>
              <NavLink to="Profile">
                <AccountCircleOutlinedIcon className={scss.icon} />
              </NavLink>
              <NavLink to="Favorites">
                <FavoriteBorderOutlinedIcon className={scss.icon} />
              </NavLink>
              <NavLink to="Cart">
                <ShoppingCartOutlinedIcon className={scss.icon} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
