export interface Message {
  title: string;
  category: string;
  message: string;
}

export interface PropMessageList {
  messageList: Message[];
}

export function MessageComponent({ title, category, message }: Message) {
  return (
    <>
      <h2>{title}</h2>
      <h2>{category}</h2>
      <h2>{message}</h2>
    </>
  );
}
