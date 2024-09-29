import { PropMessage } from "../../services/interfaces/Message.interface";
import "./Message.component.css";

export function MessageComponent({ title, category, message }: PropMessage) {
  return (
    <main>
      <ul>
        <li>
          <span>Titre : {title}</span>
          <span>Catégorie : {category}</span>
          <span>Message : {message}</span>
        </li>
      </ul>
    </main>
  );
}
