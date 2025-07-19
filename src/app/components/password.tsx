import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Password({
  passwordId,
  placeholder = "Enter your password",
  value,
  onChange,
  className = "w-full rounded-lg px-2",
}: {
  passwordId?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const type = showPassword ? "text" : "password";
  const icon = showPassword ? (
    <FaEyeSlash className="w-7 h-7" />
  ) : (
    <FaEye className="w-7 h-7" />
  );

  function handleToggle() {
    setShowPassword((prev) => !prev);
  }

  return (
    <>
      <div className="relative flex">
        <input
          id={passwordId}
          type={type}
          autoComplete="current-password"
          placeholder={placeholder}
          className={className}
          aria-describedby="password"
          aria-invalid="true"
          value={value}
          onChange={onChange}
          required
        />
        <button
          type="button"
          className="text-sky-700 flex justify-center items-center p-4 cursor-pointer"
          onClick={handleToggle}
        >
          {icon}
        </button>
      </div>
    </>
  );
}
