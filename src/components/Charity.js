import ButtonWebsite from "./ButtonWebsite";

const Charity = ({ charity }) => (

        <li className='charity' key={charity.id}>
              <img src={charity.image} alt={charity.name}/>
              <h2>{charity.name}</h2>
              <p>{charity.action}</p>
              <div>
                <a href={charity.website}>Website</a>
              </div>
          </li>
);

export default Charity;