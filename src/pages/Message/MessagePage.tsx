import {
  Message,
  MessageComponent,
  PropMessageList,
} from "../../components/Message/Message.component";

export default function MessagePage(propsMessageList: PropMessageList) {
  const { messageList } = propsMessageList;

  return (
    <>
      <h1> Message Page</h1>

      <p> Ceci est la page des messages</p>
      {messageList.map((message: Message, index: number) => (
        <div key={index}>
          <ul>
            <li>
              <MessageComponent
                key={index}
                title={message.title}
                category={message.category}
                message={message.message}
              />
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
