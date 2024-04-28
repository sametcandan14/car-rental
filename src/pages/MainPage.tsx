import Hero from "../components/Hero";
import { useEffect } from "react";
import { fetchCars } from "../utils";
import { ICarProps } from "../types";

const MainPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars()
      .then((res: ICarProps) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Hero />
      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
        <div>{/* filtreleme alanı*/}</div>

        {/* araba kartları */}
      </div>
    </div>
  );
};

export default MainPage;
