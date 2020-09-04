import React from "react";

import IconBar from "../IconBar/IconBar";
import Inbox from "../Inbox/Inbox";
import UserList from "../UserList/UserList";
import UserProfie from "../UserProfile/UserProfile";
import UserChat from "../UserChat/UserChat";

import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.container}>
        <div className={[styles.iconListArea, styles.item].join(" ")}>
          <IconBar />
        </div>
        <div className={[styles.inboxArea, styles.item].join(" ")}>
          <Inbox />
        </div>
        <div className={[styles.userListArea, styles.item].join(" ")}>
          <UserList />
        </div>
        <div className={[styles.userChatArea, styles.item].join(" ")}>
          <UserChat />
        </div>
        <div className={[styles.userProfileArea, styles.item].join(" ")}>
          <UserProfie />
        </div>
      </div>
    </div>
  );
};

export default Layout;
