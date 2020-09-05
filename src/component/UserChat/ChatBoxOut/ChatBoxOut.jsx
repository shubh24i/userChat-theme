import React from "react";

import Image from "./../../utill/Image";

import styles from "../UserChat.module.css";

const ChatBox = (props) => {
  return (
    <div className={styles.chatBotWrapper}>
      <div className={styles.chatBot}>
        <div className={styles.chatUserImage}>
          <Image
            source={require(`../../../assets/images/${props.chat.avatar}`)}
            alt="user"
          />
          {props.chat.time}
        </div>
        <p className={styles.wrapper}>{props.chat.text}</p>
      </div>
    </div>
  );
};

export default ChatBox;
