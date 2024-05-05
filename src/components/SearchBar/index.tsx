import SearchButton from "./SearchButton";
import Select from "react-select";
import { makes } from "../../constants";
import { IOption } from "../../types";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [params, setParams] = useSearchParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // marka ve modeli urlye ekleme
    if (make !== "" && model === "") {
      setParams({ make: make.toLocaleLowerCase() });
    } else if (make !== "" && model !== "") {
      setParams({ make: make.toLocaleLowerCase(), model: model.toLowerCase() });
    } else {
      alert("Lütfen marka ve model seçiniz");
    }
  };

  //   tekrar tekrar aynı işlemi yapmamak içi use memo kullandık
  const options: IOption[] = useMemo(
    () =>
      makes.map((item) => ({
        label: item,
        value: item,
      })),
    [makes]
  );

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marka seçme */}
      <div className="searchbar__item text-black ">
        <Select
          className="w-full"
          options={options}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* model seçme */}
      <div className="searchbar__item  ">
        <img src="/model-icon.png" width={25} className="absolute ml-4" />
        <input
          type="text"
          placeholder="Civic"
          className="searchbar__input text-black rounded"
          onChange={(e) => setModel(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
