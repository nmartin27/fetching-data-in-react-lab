
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

export {StarshipService};
