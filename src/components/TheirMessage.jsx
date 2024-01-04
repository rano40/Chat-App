import React from "react";

const TheirMessage = ({ lastMessage, message }) => {
  const isLastMessageByUser =
  !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isLastMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="image-attachement"
          className="message-image"
          style={{ marginLeft: isLastMessageByUser ? "4px" : "48px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#CABCDC",
            marginLeft: isLastMessageByUser ? "4px" : "48px",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
