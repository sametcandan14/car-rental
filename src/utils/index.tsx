const headers = {
  "X-RapidAPI-Key": "38c2faf6d5msh8acbbbbaa3c3185p141434jsnc392c7df38f1",
  "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
};

export async function fetchCars() {
  const res = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",

    { headers }
  );

  const data = await res.json();

  return data;
}
