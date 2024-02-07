import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from './ShipDetailsWithLocationHook.module.css'

const ShipDetailsWithLocationHook = () => {
  const location = useLocation()
  const [shipDetails, setShipDetails] = useState(location.state.ship)

  return (  
    <div className={styles.shipDetails}>
      <h2>NAME: {shipDetails.name}</h2>
      <h2>MODEL: {shipDetails.model}</h2>
      <h3>MADE BY: {shipDetails.manufacturer}</h3>
      <h3>HYPERDRIVE RATING: {shipDetails.hyperdrive_rating}</h3>
      <Link to='/ships'><button>BACK</button></Link>
    </div>
  )
}

export default ShipDetailsWithLocationHook;