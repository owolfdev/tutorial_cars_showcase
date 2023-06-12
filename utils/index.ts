export async function fetchCars() {
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
