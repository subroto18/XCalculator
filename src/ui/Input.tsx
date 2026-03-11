type Props = {
  type: string;
  id: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  required?: boolean;
  value?: string;
};

const Input = ({
  type,
  id,
  name,
  onChange,
  readOnly,
  required,
  value,
}: Props) => {
  return (
    <input
      onChange={onChange}
      type={type}
      id={id}
      value={value}
      name={name}
      readOnly={readOnly}
      required={required}
    />
  );
};

export default Input;
