import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import "./Header.css";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" />
        {/* Logo */}
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/addproduct">
          <div className="header__option">
            <span className="header__optionLineOne">Create New</span>
            <span className="header__optionLineTwo">Product</span>
          </div>
        </Link>
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">All</span>
            <span className="header__optionLineTwo">Products</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
