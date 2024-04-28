import { MouseEventHandler } from "react";

export interface IButtonProps {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnType?: "button" | "submit";
}
