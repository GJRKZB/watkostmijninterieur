interface InputFieldProps {
  type: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const classes =
    "text-xl font-bold border-2 border-black rounded-md w-full p-2 mt-2";
  return (
    <input
      className={classes}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
