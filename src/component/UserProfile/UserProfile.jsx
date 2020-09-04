import React from "react";

import bell from "../../assets/images/bell.png";
import profile from "../../assets/images/profile.png";
import fbIcon from "../../assets/images/fbm.png";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={styles.iconsArea}>
      <div
        className={[
          styles.Header,
          styles.dFlex,
          styles.mb30,
          styles.devider,
          styles.pRL20,
        ].join(" ")}
      >
        <span className={styles.notification}></span>
        <img src={bell} alt="notification" />
        <span className={styles.userName}>Matt Thompson</span>
      </div>
      <div className={[styles.userPicBlock, styles.devider].join(" ")}>
        <div className={styles.topRowIcon}>
          <span className={styles.dots}>
            <img src={fbIcon} alt="icon" />
            <a href="#link">...</a>
          </span>
        </div>
        <img src={profile} alt="user pic" />
        <h2>Kirsten Mckellar</h2>
        <span>Cape Town, RSA</span>
      </div>
      <ul className={styles.userDetails}>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Nickname:</h4>
            <span>Killa Kella</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Tel:</h4>
            <span>072 143 9920</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Date Of Birth:</h4>
            <span>July 12, 1988</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Gender:</h4>
            <span>Female</span>
          </a>
        </li>
        <li className={[styles.Header, styles.dFlex].join(" ")}>
          <a href="#link" className={styles.dFlex}>
            <h4>Language:</h4>
            <span>English</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
