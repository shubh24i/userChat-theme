import React from "react";
import styles from "../UserChat.module.css";
const ChatBoxIn = (props) => {
  return (
    <div className={[styles.chatBot, styles.chatBotRgt].join(" ")}>
      <p className={styles.wrapper}>{props.chat.text}</p>
      <div className={styles.chatUserImage}>
        <img src={props.chat.avatar} alt="user" />
        {props.chat.time}
      </div>
    </div>
  );
};

export default ChatBoxIn;
