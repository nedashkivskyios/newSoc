import React from 'react';
import {NavbarHeader} from "./NavbarHeader/NavbarHeader";
import {Navbar} from "./Navbar/Navbar";
import {NavbarFooter} from "./NavbarFooter/NavbarFooter";

const NavbarView = () => {
  return (
    <div>
      <NavbarHeader />
      <Navbar />
      <NavbarFooter />
    </div>
  );
};

export default NavbarView;