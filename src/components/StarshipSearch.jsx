// import { StarshipService, StarshipSearch } from "../services/starshipService";
import { useState, useEffect } from "react";

const StarshipSearch = ({setSearch}) => {
  const [query, setQuery] = useState('');
  const handleChange = (event) => {
    setQuery(event.target.value)
    setSearch(event.target.value);
  };

//   useEffect(() => {
//     const getStarships = async () => {
//       const findStarships = await StarshipSearch();
//       setSearch(findStarships);
//     };
//     getStarships();
//   }, []);

  return (
    <>
      <h2>Search</h2>
      <div>
       
          <label>Search Term: </label>
          <input type="text" placeholder="name, class, manufacturer, etc." onChange={handleChange} />
          <input type="submit" value="Search" />
     
        <h4>hello</h4>
      </div>
    </>
  );
};

export default StarshipSearch;
