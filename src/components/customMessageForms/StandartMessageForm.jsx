import React, { useState } from "react";
import MessageFormUI from "./MessageFormUI";

function StandartMessageForm({ props, activeChat }) {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const at = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      text: message,
      attachments: at,
      sender_username: props.userName,
      created: date,
      activeChatId: activeChat.id,
    };
    props.onSubmit(form);
    setMessage("");
    setAttachment("");
  };
  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default StandartMessageForm;
