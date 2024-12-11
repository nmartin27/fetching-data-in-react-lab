import StarshipCard from "./StarshipCard"

const StarshipList = ({starships}) => {


return(
    <div>
      <h2>Starship List</h2>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <StarshipCard starship={starship} />
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default StarshipList