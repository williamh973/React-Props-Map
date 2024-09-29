import { PropButton } from "../../../services/interfaces/Button.interface";
import "./Button.css";

export const Button = ({ label, type, onClick, id }: PropButton) => {
  return (
    <button className="button-29" type={type} onClick={onClick} id={id}>
      {label}
    </button>
  );
};
