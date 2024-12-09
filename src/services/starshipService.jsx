import { useState, useEffect } from "react";
export const BASE_URL = "https://swapi.dev/api/";

const StarshipService =  () => {
  const [starships, setStarships] = useState([]);
    const fetchStarships = async () => {
        try {
  let response = await fetch(`${BASE_URL}/starships`);
  let JSONdata = await response.json();
  console.log(JSONdata);
    setStarships(JSONdata.results)
        } catch (error) {
            console.error('Error Fetching Starships:', error);
        }
  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     // setStarships(JSONdata)
  //   };
};
    useEffect(() => {
        fetchStarships();
    }, []);


  return (
    <>
      <h2>Starships</h2>
      <div className="starshipsCardsDiv">
        {starships.map((starship, index) => (
          <div className="starshipsCard" key={index}>
            <h3> {starship.name}</h3>
            <p>Class: {starship.starship_class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
          </div>
        ))}
      </div>
    </>
  );

};

export default StarshipService;
