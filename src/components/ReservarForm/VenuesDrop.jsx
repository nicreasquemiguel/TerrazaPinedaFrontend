import React from 'react'
import { getVenues } from '../../actions/booking'

const VenuesDrop = () => {
    const [venues, setVenues] = useState([])

    useEffect(() => {
        getVenues().then(data => setVenues(data))
        
    }, [personas])
  
  return (
    <div>
            <ul>
    {
        venues.map((venue, index) => {
            return <li key={index}>{venue.name} {venue.address}</li>
        })
    }
</ul>
    </div>
  )
}

export default VenuesDrop