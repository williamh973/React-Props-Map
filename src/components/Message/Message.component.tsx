import "./Message.component.css";

export interface Message {
  title: string;
  category: string;
  message: string;
}

export interface PropMessageList {
  messages: Message[];
}

export function MessageComponent({ title, category, message }: Message) {
  return (
    <main>
      <ul>
        <li>
          <p>{title}</p>
          <p>{category}</p>
          <p>{message}</p>
        </li>
      </ul>
    </main>
  );
}
