import React, { useState } from 'react';
import axios from 'axios';

// Cards
const getSmurf = () => {

    axios
    .get('http://localhost:3333/smurfs')
    .then( response => {
        console.log(response)
    })

}

export const SmurfCard = () => {

    const [ smurf, setSmurf ] = useState(getSmurf);
    console.log(smurf)

    return (
        <>
        </>
    )


}