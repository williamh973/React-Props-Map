import { MessageComponent } from "../../components/Message/Message.component";
import {
  PropMessage,
  PropMessageList,
} from "../../services/interfaces/Message.interface";
import "./MessagePage.css";

export default function MessagePage(messageList: PropMessageList) {
  const { messages } = messageList;

  return (
    <>
      <h1>Message Page</h1>

      <p>Message reçu : ({messages.length})</p>

      {messages.map((message: PropMessage, index: number) => (
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
