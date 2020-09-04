import React from "react";

import UserIcon from "../../assets/images/inbox.png";
import styles from "./inbox.module.css";

const Inbox = () => {
  return (
    <div className={[styles.iconsArea, styles.pRL20].join(" ")}>
      <div className={[styles.Header, styles.dFlex, styles.mb30].join(" ")}>
        <h2>Inbox</h2>
        <span className={styles.userIconCircel}>
          <img src={UserIcon} alt="user" />
        </span>
      </div>
      <ul className={styles.devider}>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="/All-Messages" className={styles.dFlex}>
            <h4>All Messages</h4>
            <span>21</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex, styles.active].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Unread</h4>
            <span>89</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Important</h4>
            <span>6</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Drafts</h4>
            <span>27</span>
          </a>
        </li>
      </ul>
      <ul className={styles.devider}>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Teams</h4>
            <span>4</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Groups</h4>
            <span>3</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Channels</h4>
            <span>18</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Locations</h4>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Media</h4>
            <span>120</span>
          </a>
        </li>
      </ul>
      <ul>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Help</h4>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Settins</h4>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Inbox;
