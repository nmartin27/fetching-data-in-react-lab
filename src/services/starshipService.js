
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

// const StarshipService = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}/starships`); // Replace with your API endpoint
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.results || [];  // Return an empty array if 'results' is missing
//   } catch (error) {
//     console.error("Error fetching starships:", error);
//     return []; // Return an empty array in case of an error
//   }
// };

  const SearchList = async (query) => {
    try {
      const response = await fetch(`${BASE_URL}/starships/?search=${query}`);
      const data = await response.json();
      console.log(data);
      return data.results;
    } catch (error) {
      console.error("Error Fetching Starships for list:", error);
    }
  };
  

export {StarshipService, SearchList};
