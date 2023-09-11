interface InputProps {
  mailError?: string;
  passError?: string;
  label: string;
  type: string;
  placeholder: string;
  name: string;
  list?: string;
  iconClass: string;
  autoComplete: string;
  regitrationError?: boolean;
  onChange: (value: string, fieldName: string) => void;
  viewPassword?: () => void;
}

function InputWithLabel({
  label,
  type,
  placeholder,
  name,
  iconClass,
  viewPassword,
  onChange,
  list,
  mailError,
  passError,
  regitrationError,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value, name);
    }
  };

  return (
    <>
      <label className="font-semibold ml-1 mt-1 text-left" htmlFor={name}>
        {label}
      </label>
      <div className="relative w-[100%]">
        <input
          type={type}
          list={list}
          placeholder={placeholder}
          autoComplete="Off"
          className={`bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%] valid:border-2 border-green-400 ${
            (mailError && mailError?.length > 0) ||
            (passError && passError?.length > 0) ||
            regitrationError
              ? "border-2 border-red-400"
              : ""
          }`}
          name={name}
          minLength={1}
          maxLength={50}
          required
          onChange={handleChange}
          onBlur={handleChange}
        />
        <i
          className={`fa-solid ${iconClass} absolute right-3 top-[10px] hover:cursor-pointer`}
          style={{ color: "#333" }}
          onClick={viewPassword}
        ></i>
      </div>
    </>
  );
}

export default InputWithLabel;
