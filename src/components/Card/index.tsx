import { ICarProps } from "../../types";
import CustomButton from "../CustomButton";
import CarInfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { useState } from "react";

interface ICarCardProps {
  car: ICarProps;
}

const Card = ({ car }: ICarCardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="car-card group">
      {/* araba ismi */}
      <h2 className="car-card__content-title">
        {car.make} {car.model}
      </h2>
      {/* Fiyat Alanı */}
      <p className="flex mt-6 text-[32px]">
        <span className="self-start text-[14px] font-semibold">TL</span>
        {Math.round(Math.random() * 2000)}
        <span className="self-end text-[14px] font-medium">/gün</span>
      </p>
      {/* Resim Alanı */}
      <div className="relative w-full h-40 my-3 object-contain">
        <img src="hero.png" className="w-full h-full  object-contain" alt="" />
      </div>
      {/* alt kısım */}
      <div className="relative flex w-full mt-2">
        <div className="mt-2 group-hover:invisible w-full flex justify-between text-gray">
          <CarInfo
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
            icon="steering-wheel.svg"
          />
          <CarInfo
            title={car.drive === "fwd" ? "Önden Çekişli" : "Arkadan Çekişli"}
            icon="steering-wheel.svg"
          />
          <CarInfo title={car.city_mpg + " MPG"} icon="steering-wheel.svg" />
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Daha Fazla"
            designs="w-full py-[16px] rounded-full bg-primary-blue text-white hover:bg-blue-800"
            rIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* detay modalı */}
      <DetailModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default Card;
