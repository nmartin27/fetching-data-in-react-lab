import { StarshipService } from "../services/starshipService";
import { useState, useEffect } from "react";


const StarshipCard = () => {
 const [starships, setStarships] = useState([]);

  useEffect(() => {
   const fetchStarships = async () => {
    const allStarships = await StarshipService();
    setStarships(allStarships)
   }
   fetchStarships()
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

export default StarshipCard