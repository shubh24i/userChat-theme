import React from "react";
//import React, { useState, useEffect } from "react";
import UserListItem from "./UserListItem/UserListItem";
import userList from "./../../data/userChat.json";

import styles from "./UserList.module.css";

import userImg1 from "../../assets/images/userImg1.png";
import userImg2 from "../../assets/images/userImg2.png";
import userImg3 from "../../assets/images/userImg3.png";
import userImg4 from "../../assets/images/userImg4.png";
import userImg5 from "../../assets/images/userImg5.png";
import userImg6 from "../../assets/images/userImg6.png";

const userAvatar = [userImg1, userImg2, userImg3, userImg4, userImg5, userImg6];

const UserList = () => {
  /* 
  //Api Call
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); */

  return (
    <div className={styles.userListArea}>
      <div
        className={[
          styles.Header,
          styles.dFlex,
          styles.mb30,
          styles.devider,
        ].join(" ")}
      >
        <input className={styles.search} type="text" placeholder="Search" />
      </div>
      <ul className={styles.pRL20}>
        {userList.map((user, i) => {
          const newUser = { ...user, avatar: userAvatar[i] };

          return <UserListItem key={i} user={newUser} avatar={userImg1} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
