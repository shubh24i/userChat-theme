import React from "react";
//import React, { useState, useEffect } from "react";
import UserListItem from "./UserListItem/UserListItem";
import userList from "./../../data/userChat.json";

import styles from "./UserList.module.css";

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
          return <UserListItem key={i} user={user} />;
        })}
      </ul>
    </div>
  );
};

export default UserList;
