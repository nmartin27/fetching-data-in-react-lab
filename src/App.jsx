// src/App.jsx

import StarshipService from "./services/starshipService.jsx";


const App = () => {

  return (
    <>
    <h1>Star Wars API</h1>
    <h2>Search</h2>
    <form >
      <label htmlFor="">Search Term: </label>
      <input type="text" />
      <input type="submit" value="Search"/>
    </form>
    
    <StarshipService />
    </>
  );
}

export default App
