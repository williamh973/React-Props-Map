import "./Button.css";

interface ButtonShared {
  label: string;
  type: "submit" | "button" | "reset" | undefined;
  onClick: () => void;
}

export const Button = ({ label, type, onClick }: ButtonShared) => {
  return (
    <button className="button-29" onClick={onClick} type={type}>
      {label}
    </button>
  );
};
