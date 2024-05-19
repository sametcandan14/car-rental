import Hero from "../components/Hero";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCars } from "../utils";
import { ICarProps } from "../types";
import Card from "./../components/Card/index";
import SearchBar from "../components/SearchBar";
import CustomFilters from "../components/CustomFilters";
import { useSearchParams } from "react-router-dom";
import ShowMore from "../components/ShowMore";
import { fuels, years } from "../constants";

interface Error {
  error?: string;
}

const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>([]);
  const [params, setParams] = useSearchParams();

  const limit = Number(params.get("limit")) || 5;

  useEffect(() => {
    const paramObj = Object.fromEntries(params.entries());

    fetchCars(paramObj)
      .then((res: ICarProps[]) => setCars(res))
      .catch((err) => console.log(err));
  }, [params]);

  const isDataEmpty: boolean = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>

        {/* filtreleme alanı*/}
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilters title="Yakıt Tipi" options={fuels} />
            <CustomFilters title="Üretim Yılı" options={years} />
          </div>
        </div>

        {/* arabalar boş geldiyse ekrana uyarı basılır */}

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
          </div>
        ) : (
          <>
            <section>
              <div className="home__cars-wrapper">
                {cars.map((car, i) => (
                  <Card car={car} key={i} />
                ))}
              </div>
              <ShowMore limit={limit} isNext={limit < 30} />
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPage;
