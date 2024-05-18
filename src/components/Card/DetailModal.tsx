import { ICarProps } from "../../types";

interface IDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

const DetailModal = ({ isOpen, closeModal, car }: IDetailProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4 ">
          <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shdow-xl overflow-auto  ">
            {/* kapatma butonu */}

            <button
              onClick={closeModal}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full   "
            >
              <img src="/close.svg" />
            </button>

            {/* fotoğraflar */}

            <div className="flex-1 flex flex-col gap-3">
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg ">
                <img src="/hero.png" className="h-full mx-auto" />
              </div>
              {/* küçük foto */}
              <div className="flex gap-3">
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100 ">
                  <img
                    src="/hero.png"
                    className="h-full mx-auto object-contain"
                  />
                </div>
                {/* küçük foto */}
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100 ">
                  <img
                    src="/hero.png"
                    className="h-full mx-auto object-contain"
                  />
                </div>{" "}
                {/* küçük foto */}
                <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg-100 ">
                  <img
                    src="/hero.png"
                    className="h-full mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* araba bilgileri */}

            {Object.entries(car).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <h4 className="capitalize text-gray">
                  {key.split("_").join(" ")}
                </h4>
                <p className="text-black-100 font-semibold">{value} </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
