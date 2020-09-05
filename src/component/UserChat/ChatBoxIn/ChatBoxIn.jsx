import React from "react";

import styles from "../UserChat.module.css";
import Image from "./../../utill/Image";

const ChatBoxIn = (props) => {
  return (
    <div className={[styles.chatBot, styles.chatBotRgt].join(" ")}>
      <p className={styles.wrapper}>{props.chat.text}</p>
      <div className={styles.chatUserImage}>
        <Image
          source={require(`../../../assets/images/${props.chat.avatar}`)}
          alt="user"
        />
        {props.chat.time}
      </div>
    </div>
  );
};

export default ChatBoxIn;
