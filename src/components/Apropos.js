import React from 'react'
import photo from '../Photo-nb.png'

const apropos = () => {
    return (
        <div className="container">
            <div className="mt-5 row align-items-center">
                <div className="col-6">
                    <img src={photo} alt="profil"></img>
                </div>
                <div className="col-6 shortDescription">
                    <div className="text-uppercase title">à propos de moi</div>
                    <div className="name">Remi Turini</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt eaque saepe impedit ut consectetur ex esse quasi et! Molestiae dolores distinctio impedit est voluptates ipsum totam quaerat, dolore velit!</div>                  
                </div>
            </div>
        </div>
    )
}

export default apropos
