import { Link } from 'react-router-dom';
import styles from './Ship.module.css'

const Ship = ({ship}) => {
  return (  
    <div className={styles.shipCard} >
      <h2>{ship.name}</h2>
      <div className={styles.linkContainer} >
        <Link><button>useLocation</button></Link>
        <Link><button>NO useLocation</button></Link>
      </div>
    </div>
  );
}

export default Ship;