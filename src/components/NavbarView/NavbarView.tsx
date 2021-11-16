import React from 'react';
import styles from './NavbarView.module.css'
import {NavbarHeader} from "./NavbarHeader/NavbarHeader";
import {Navbar} from "./Navbar/Navbar";
import {NavbarFooter} from "./NavbarFooter/NavbarFooter";

const NavbarView = () => {
  return (
    <div className={styles.navbarView}>
      <NavbarHeader/>
      <Navbar/>
      <NavbarFooter/>
    </div>
  );
};

export default NavbarView;