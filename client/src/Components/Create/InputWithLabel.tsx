interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  iconClass: string;
  onChange?: (value: string, fieldName: string) => void;
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
          placeholder={placeholder}
          className="bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%] valid:border-2 border-green-400"
          name={name}
          minLength={4}
          maxLength={30}
          required
          onChange={handleChange}
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
