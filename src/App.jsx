// src/App.jsx
import { useState, useEffect } from "react";
import StarshipList from "./components/StarshipList.jsx";
import StarshipSearch from "./components/StarshipSearch.jsx";
import { StarshipService } from "./services/starshipService";  // Assuming it's a service function to fetch data

const App = () => {
  const [starships, setStarships] = useState([]); // Holds the fetched starships
  const [search, setSearch] = useState(''); // Holds the search query

  // Fetch starships from the service when the component mounts
  useEffect(() => {
    const getStarships = async () => {
      try {
        const findStarships = await StarshipService(); // Fetch starships from the API service
        setStarships(findStarships); // Set the state with fetched data
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };
    getStarships();
  }, []); // Empty dependency array means this runs only once after the component mounts

  // Filter starships based on the search term
  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch setSearch={setSearch} /> {/* Pass setSearch to StarshipSearch to update the search term */}
      <StarshipList starships={filteredStarships} /> {/* Pass filtered starships to StarshipList */}
    </>
  );
};

export default App;

