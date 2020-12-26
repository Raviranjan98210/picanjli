import React, { useState, useEffect } from "react";
import logo from "../../../images/navLogo.png";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { debounce } from "../../../utilities/debounce";
import ImageSearch from "../../ui/SearchBox/ImageSearch";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const [click, setClick] = useState(false);

  const handleMenuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible, prevScrollPos, handleScroll]);

  return (
    <nav
      className={`bg-purple-500 shadow-xl h-20 bg-gradient-to-r from-gradientPrimary to-gradientSecondary w-full ${classes.navbar} `}
      style={{ top: visible ? "0" : "-80px" }}
    >
      <Link to="/" className={classes.navbar_logo}>
        <img src={logo} alt="logo" className="w-30 md:w-28 ml-2 md:-ml-2" />
      </Link>
      <ImageSearch />
      <div className={classes.menu_icon} onClick={handleMenuClick}>
        <i
          className={click ? "fas fa-times" : "fas fa-bars"}
          style={{ color: "white" }}
        />
      </div>

      <ul
        className={
          click
            ? `${classes.nav_menu} ${classes.active}`
            : `${classes.nav_menu}`
        }
      >
        <li className={classes.nav_item} onClick={closeMobileMenu}>
          <Link to="/" className={classes.nav_links}>
            Home
          </Link>
        </li>
        <li className={classes.nav_item} onClick={closeMobileMenu}>
          <Link to="/images/discover/all" className={classes.nav_links}>
            Discover
          </Link>
        </li>
        <li className={classes.nav_item} onClick={closeMobileMenu}>
          <Link to="/images/types/illustration" className={classes.nav_links}>
            Illustrations
          </Link>
        </li>
        <li className={classes.nav_item} onClick={closeMobileMenu}>
          <Link to="/images/types/vector" className={classes.nav_links}>
            Vector
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
