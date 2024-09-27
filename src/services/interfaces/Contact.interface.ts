import { Message } from "./Message.interface";

export interface PropContact {
  handleSubmitMessage: (message: Message) => void;
  firstname: string;
  city: string;
}
