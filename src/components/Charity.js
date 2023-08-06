
const Charity = ({ charity }) => (

        <li className='charity' key={charity.id}>
              <img src={charity.image} alt={charity.name}/>
              <h2>{charity.name}</h2>
              <p>{charity.action}</p>
              <div>
                <button src={charity.website}>Website</button>
                <button>Donate</button>
              </div>
          </li>
);

export default Charity;