// src/App.jsx

import StarshipList from "./components/StarshipList.jsx";
import StarshipSearch from "./components/StarshipSearch.jsx";
import { StarshipSearch } from "./services/starshipService.js";

const App = () => {
  const [search, setSearch] = useState('');
    
  useEffect(() => {
    const getStarships = async () => {
      const findStarships = await StarshipSearch();
      setSearch(findStarships);
    };
    getStarships();
  }, []);
  
const filteredStarships = starships.filter((starship) =>
starship.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch setSearch={setSearch}/>

      <StarshipList starships={filteredStarships}/>
    </>
  );
};

export default App;
