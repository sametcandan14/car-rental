import { MouseEventHandler } from "react";

export interface IButtonProps {
  title: string;
  designs?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  btnType?: "button" | "submit";
}

export interface ICarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
