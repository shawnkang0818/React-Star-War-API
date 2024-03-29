import { Link } from 'react-router-dom';
import styles from './Ship.module.css'

const Ship = ({ship}) => {
  return (  
    <div className={styles.shipCard} >
      <h2>{ship.name}</h2>
      <div className={styles.linkContainer} >
        <Link to="/ships/details" state={{ship}}>
          <button>useLocation</button>
        </Link>

        <Link to={`/ships/${ship.url.match(/\d+/)}`}>
          <button>NO useLocation</button>
        </Link>
      </div>
    </div>
  );
}

export default Ship;