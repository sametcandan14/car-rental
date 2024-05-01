import Hero from "../components/Hero";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCars } from "../utils";
import { ICarProps } from "../types";
import Card from "./../components/Card/index";

interface Error {
  error?: string;
}

const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>([]);

  useEffect(() => {
    fetchCars()
      .then((res: ICarProps[]) => setCars(res))
      .catch((err) => console.log(err));
  }, []);

  const isDataEmpty: boolean = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div>{/* filtreleme alanı*/}</div>

        {/* arabalar boş geldiyse ekrana uyarı basılır */}

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <>
            <section className="home__cars-wrapper">
              {cars.map((car, i) => (
                <Card car={car} key={i} />
              ))}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
