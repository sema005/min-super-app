import React from 'react'

const Oppmuntring = (evt) => {

    return(
        <div className="oppmuntring">
            <h1>Kom igjen {evt.navn}</h1>
            <p>{evt.emne} er ikke så vanskelig som du tror.</p>
            <p>Du må bare øve</p>
        </div>
    )
}


export default Oppmuntring