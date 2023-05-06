"use client";

import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`disabled:cursor-pointer-not-allowed relative w-full rounded-lg transition hover:opacity-80 disabled:opacity-70
      ${
        outline
          ? "border-black bg-white text-black"
          : "border-e-rose-500 bg-rose-500 text-white"
      }
      ${
        small
          ? "border-[1px] py-1 text-sm font-light"
          : "text-md border-2 py-3 font-semibold"
      }
      `}
    >
      {Icon && (
        <Icon size={24} className="absolute left-4 top-1/2 -translate-y-1/2" />
      )}
      {label}
    </button>
  );
};

export default Button;
