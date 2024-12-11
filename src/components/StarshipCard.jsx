// import { StarshipService, SearchList } from "../services/starshipService";
// import { useState, useEffect } from "react";

const StarshipCard = ({ starship }) => {
  //  const [starship, setStarship] = useState([]);

  //   useEffect(() => {
  //    const fetchStarships = async () => {
  //     const allStarships = await StarshipService();
  //     setStarships(allStarships)
  //    }
  //    fetchStarships()
  //   }, []);
  console.log("starship prop:", starship);

  if (!starship) {
    return <p>Loading starship...</p>;
  }

  if (Object.keys(starship).length === 0) {
    return <p>No starships found.</p>;
  }
  
  return (
    <>
      
      <div className="starshipsCardsDiv">
        {/* {starship.map((starship, index) => ( */}
          <div className="starshipsCard" >
            <h3> {starship.name}</h3>
            <p>Class: {starship.starship_class}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Model: {starship.model}</p>
          </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default StarshipCard;
