import React from "react";

import Image from "./../../utill/Image";

import styles from "./UserListItem.module.css";

const UserListItem = (props) => {
  return (
    <li className={[styles.Header, styles.dFlex].join(" ")}>
      <a
        href={props.user.url}
        className={[styles.dFlex, styles.link].join(" ")}
      >
        <span className={styles[props.user.status]}></span>
        <Image
          classes={styles.devider}
          source={require(`../../../assets/images/${props.user.avatar}`)}
          altName="user"
        />
        <div className={styles.headinBlock}>
          <h3>{props.user.userName}</h3>
          <span>{props.user.chat}</span>
        </div>
        <span className={styles.dots}>
          <span href="#">...</span>
          <br />
          {props.user.time}
        </span>
      </a>
    </li>
  );
};

export default UserListItem;
