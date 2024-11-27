import React from "react";
import scss from "./Header.module.scss";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { Link } from "react-router-dom";
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
              <Link to="/admin">
                <AdminPanelSettingsOutlinedIcon className={scss.icon} />
              </Link>
              <Link to="/">
                <a href="">HOME</a>
              </Link>
              <Link to="Products">
                <a href="">PRODUCTS</a>
              </Link>
              <Link to="About">
                <a href="">ABOUT</a>
              </Link>
            </div>
            <div className={scss.actions}>
              <AccountCircleOutlinedIcon className={scss.icon} />
              <FavoriteBorderOutlinedIcon className={scss.icon} />
              <ShoppingCartOutlinedIcon className={scss.icon} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
