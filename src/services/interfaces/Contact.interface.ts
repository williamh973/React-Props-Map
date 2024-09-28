import { Message } from "../../components/Message/Message.component";

export interface PropContact {
  handleSubmitMessage: (message: Message) => void;
  firstname: string;
  city: string;
}
