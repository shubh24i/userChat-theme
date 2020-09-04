import React from "react";

import start from "../../assets/images/star.png";
import phone from "../../assets/images/phone.png";
import video from "../../assets/images/video.png";
import chatUserF from "../../assets/images/chatUserF.png";
import chatUserM from "../../assets/images/chatUserM.png";
import cardImg from "../../assets/images/cardImg.png";
import rating from "../../assets/images/rating.png";

import ChatBoxOut from "./ChatBoxOut/ChatBoxOut";
import chats from "../../data/chat.json";
import styles from "./UserChat.module.css";
import ChatBoxIn from "./ChatBoxIn/ChatBoxIn";
const users = [
  { userId: 100, name: "Kirsten Mckellar", avatar: chatUserF },
  { userId: 101, name: "Rojar", avatar: chatUserM },
];

const UserChat = () => {
  return (
    <div className={styles.userChatArea}>
      <div
        className={[
          styles.Header,
          styles.dFlex,
          styles.mb30,
          styles.devider,
        ].join(" ")}
      >
        <span className={styles.userTyping}>Kirsten Mckellar is typing...</span>
        <div className={[styles.dFlex, styles.rightIcon].join(" ")}>
          <span className={styles.item}>
            <img src={start} alt="start" />
          </span>
          <span className={styles.item}>
            <img src={phone} alt="phone" />
          </span>
          <span className={styles.item}>
            <img src={video} alt="video" />
          </span>
        </div>
      </div>
      <div className={styles.chatBotWrapper}>
        {chats.map((chat, i) => {
          let name, avatar;
          if (chat.userId === 100) {
            name = users[0].name;
            avatar = users[0].avatar;
          } else {
            name = users[1].name;
            avatar = users[1].avatar;
          }
          const newChat = { ...chat, name: name, avatar: avatar };

          if (chat.userId === 100) {
            return <ChatBoxOut key={i} chat={newChat} />;
          } else {
            return <ChatBoxIn key={i} chat={newChat} />;
          }
        })}

        <div
          className={[styles.chatBot, styles.chatBotRgt, styles.bigCard].join(
            " "
          )}
        >
          <div className={[styles.wrapper, styles.dFlex].join(" ")}>
            <img src={cardImg} alt="card" />
            <div className={styles.cardWrapper}>
              <h3>Ready To Die </h3>
              <p>The Notorious B.I.G.</p>
              <br />
              <img src={rating} alt="rating" />
              <span className={styles.rating}>95 Ratings</span>
              <button className={styles.buyNow}>$12.99 - BUY NOW</button>
            </div>
          </div>
          <div className={styles.chatUserImage}>
            <img src={chatUserM} alt="user" />
            12:45
          </div>
        </div>
      </div>
      <div className={styles.sendInptWraper}>
        <input type="text" placeholder="Type your message..." />
      </div>
    </div>
  );
};

export default UserChat;
