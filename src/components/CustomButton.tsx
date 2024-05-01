import { IButtonProps } from "../types";

const CustomButton = ({
  title,
  designs,
  handleClick,
  disabled,
  btnType,
  rIcon,
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`custom-btn ${designs}`}
      onClick={handleClick}
      type={btnType || "button"} // gönderildiyse btnType gönderilmediyse button
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-6 ">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
