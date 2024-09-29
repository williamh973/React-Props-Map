import { ChangeEvent } from "react";

export interface PropInput {
  type: string;
  name: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
}
