interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  iconClass: string;
  autoComplete: string;
  mailError?: string;
  passError?: string;
  setPermitSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  setMailError?: React.Dispatch<React.SetStateAction<string>>;
  setPassError?: React.Dispatch<React.SetStateAction<string>>;
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
  setPermitSubmit,
  setPassError,
  passError,
  mailError,
  setMailError,
}: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name);
  };
  const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    if (setPassError) {
      if (e.target.value.length < 8) {
        setPassError("Ingrese una contraseña válida(mayor a 8 caracteres)");
        setPermitSubmit(false);
      } else {
        setPassError("");
        setPermitSubmit(true);
      }
    }
    if (setMailError) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(e.target.value)) {
        setMailError("Ingrese un correo Válido");
        setPermitSubmit(false);
      } else {
        setMailError("");
        setPermitSubmit(true);
      }
    }
  };
  const handleValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    if (setPassError) {
      if (e.target.value.length < 8) {
        setPassError("Ingrese una contraseña válida(mayor a 8 caracteres)");
        setPermitSubmit(false);
      } else {
        setPassError("");
        setPermitSubmit(true);
      }
    }
    if (setMailError) {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(e.target.value)) {
        setMailError("Ingrese un correo Válido");
        setPermitSubmit(false);
      } else {
        setMailError("");
        setPermitSubmit(true);
      }
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
          autoComplete="Off"
          className={`bg-[#D9D9D9] px-4 py-2 rounded-lg w-[100%] valid:border-2 border-green-400 ${
            (mailError && mailError?.length > 0) ||
            (passError && passError?.length > 0)
              ? "border-2 border-red-400"
              : ""
          }`}
          name={name}
          minLength={4}
          maxLength={30}
          onChange={handleChange}
          onBlur={handleValidation}
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
