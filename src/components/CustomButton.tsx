import { IButtonProps } from "../types";

const CustomButton = ({
  title,
  designs,
  handleClick,
  disabled,
  btnType,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`custom-btn ${designs}`}
      onClick={handleClick}
      type={btnType || "button"} // gönderildiyse btnType gönderilmediyse button
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
