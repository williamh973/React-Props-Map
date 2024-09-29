import { PropAuthor } from "./Author.interface";
import { PropMessage } from "./Message.interface";

export interface PropContact {
  handleSubmitMessage: (message: PropMessage) => void;
  authorList: PropAuthor[];
}
