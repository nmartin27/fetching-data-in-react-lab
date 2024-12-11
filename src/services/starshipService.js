
export const BASE_URL = "https://swapi.dev/api/";

const StarshipService = async () => {
     try {
      const response = await fetch(`${BASE_URL}/starships`);
      const JSONdata = await response.json();
      console.log(JSONdata);
      return JSONdata.results;
    } catch (error) {
      console.error("Error Fetching Starships:", error);
    }
  };

  const StarshipSearch = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/starships/?search=${query}`);
      const data = await response.json();
      console.log(data);
      return data.results;
    } catch (error) {
      console.error("Error Fetching Starships:", error);
    }
  };
  

export {StarshipService, StarshipSearch};
