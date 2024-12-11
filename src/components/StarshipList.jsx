import StarshipCard from "./StarshipCard"

const StarshipList = ({starships}) => {


return(
    <div>
      <h2>Starship List</h2>
      <ul>
        {starships.map((starship) => (
          // <li >
            <StarshipCard key={starship.name} starship={starship} />
          // </li>
        ))}
      </ul>
    </div>
  );
};
 
export default StarshipList