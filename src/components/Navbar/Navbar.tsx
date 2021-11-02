import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import {NAVIGATION_PATH} from "../pages/Routes";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div><NavLink className={styles.item} activeClassName={styles.activeLink} to={NAVIGATION_PATH.profile}>Profile</NavLink></div>
      <div><NavLink className={styles.item} activeClassName={styles.activeLink} to={NAVIGATION_PATH.dialogs}>Dialogs</NavLink></div>
      <div><NavLink className={styles.item} activeClassName={styles.activeLink} to={'/news'}>News</NavLink></div>
      <div><NavLink className={styles.item} activeClassName={styles.activeLink} to={'/users'}>Users</NavLink></div>
      <div><NavLink className={styles.item} activeClassName={styles.activeLink} to={'/settings'}>Settings</NavLink></div>
    </div>
  );
};