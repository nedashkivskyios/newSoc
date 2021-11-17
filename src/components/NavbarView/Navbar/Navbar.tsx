import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css'
import {NAVIGATION_PATH} from "../../ContentView/Routes";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <NavLink className={styles.item}


                 to={NAVIGATION_PATH.profile}>Profile</NavLink>
      </div>
      <div>
        <NavLink className={styles.item}

                 to={NAVIGATION_PATH.dialogs}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink className={styles.item}

                 to={'/news'}>News</NavLink>
      </div>
      <div>
        <NavLink className={styles.item}

                 to={'/users'}>Users</NavLink>
      </div>
      <div>
        <NavLink className={styles.item}

                 to={'/settings'}>Settings</NavLink>
      </div>
    </div>
  );
};