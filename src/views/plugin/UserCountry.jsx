import { useState, useEffect } from "react";

function GetCurrentAddress () {
    const [address, setAddress] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(pos => {
            const {latitude, longitud} = pos.coords

            const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&long=${longitud}`

            fetch(url)
            .then(res => res.json())
            .then(data => setAddress(data.address))

        })
    })
}

export default GetCurrentAddress