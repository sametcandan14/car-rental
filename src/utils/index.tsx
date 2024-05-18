const headers = {
  "X-RapidAPI-Key": "38c2faf6d5msh8acbbbbaa3c3185p141434jsnc392c7df38f1",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}

export async function fetchCars(filters: fetchParams) {
  const { make, model = "", year = "", fuel = "", limit = "5" } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,

    { headers }
  );

  const data = await res.json();

  return data;
}

// export const generateImage = (car: any, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getImage");

//   url.searchParams.append("customer", "hrjavascript-mastery");
//   url.searchParams.append("make", car.make);
//   url.searchParams.append("modelFamily", car.model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("angle", String(angle));

//   return String(url);
// };
