import {
  Message,
  MessageComponent,
  PropMessageList,
} from "../../components/Message/Message.component";

import "./MessagePage.css";

export default function MessagePage(messageList: PropMessageList) {
  const { messages } = messageList;

  return (
    <>
      <h1> Message Page</h1>

      <p> Ceci est la page des messages</p>
      {messages.map((message: Message, index: number) => (
        <div key={index}>
          <MessageComponent
            key={index}
            title={message.title}
            category={message.category}
            message={message.message}
          />
        </div>
      ))}
    </>
  );
}
