import { PropInput } from "../../../services/interfaces/Input.interface";

export const Input = ({
  type,
  name,
  id,
  onChange,
  placeholder,
  minLength,
  maxLength,
  value,
}: PropInput) => {
  return (
    <input
      name={name}
      type={type}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      value={value}
    />
  );
};
