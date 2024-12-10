// src/App.jsx

import StarshipList from "./components/StarshipList.jsx";
import StarshipSearch from "./components/StarshipSearch.jsx";


const App = () => {

  return (
    <>
    <h1>Star Wars API</h1>
    <h2>Search</h2>
    <StarshipSearch />
    <form >
      <label htmlFor="">Search Term: </label>
      <input type="text" />
      <input type="submit" value="Search"/>
    </form>
    <StarshipList />
 
    </>
  );
}

export default App
