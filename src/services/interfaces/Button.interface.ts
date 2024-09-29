export interface PropButton {
  label: string;
  type: "submit" | "button" | "reset" | undefined;
  onClick?: () => void;
  id?: string;
}
