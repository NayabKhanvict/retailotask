export const searchProducts = async (term: string) => {
  const BASE_URL = "http://api.giphy.com/v1/gifs/search";
  const resJson = await fetch(
    `${BASE_URL}?api_key=iYGa9pXrUIC5zpWT6gTTZ51lQqmDM5LM&q=${term}`
  );
  const response = await resJson.json();

  if (response) {
    return response;
  }

  return null;
};
