import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as apiService from '../../services/apiService'
import styles from './ShipDetailsWithoutLocationHook.module.css'

const ShipDetailsWithoutLocationHook = () => {
  
  const {shipId} = useParams()
  const [shipDetails, setShipDetails] = useState({})

  useEffect (() => {
    const fetchShipDetails = async () => {
      const shipData = await apiService.getShipData(shipId)
      setShipDetails(shipData)
    }
    fetchShipDetails()
  })

  {if (!shipDetails.name) return <h2>Please wait... loading Ship...</h2>}

  return (  
    <>
      <div className={styles.shipDetails}>
        <h2>NAME: {shipDetails.name}</h2>
        <h2>MODEL: {shipDetails.model}</h2>
        <h3>MADE BY: {shipDetails.manufacturer}</h3>
        <h3>HYPERDRIVE RATING: {shipDetails.hyperdrive_rating}</h3>
        <Link to='/ships'><button>BACK</button></Link>
      </div>
    </>
  )
}

export default ShipDetailsWithoutLocationHook