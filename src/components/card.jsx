import React, { useState } from "react";
import "../style/card.css";
import star from '../assets/star.svg'
import relo1 from '../assets/relo1.png'
import relo2 from '../assets/relo2.png'
import relo3 from '../assets/relo3.png'
import relo4 from '../assets/relo4.png'




function Card() {



    const kaike = [
        {
            title: 'motta é legal',
            price: '1'
        },
        {
            title: 'master watch',
            price: '500'
        },
        {
            title: 'omagaide',
            price: '00'
        },
        {
            title: 'maguaire',
            price: '7000'
        }
    ]



    return (
        <div className="card" >
            <div>
                {kaike.map(motta => {
                    return (
                        <div>
                            <span>{motta.title}</span>
                            <span>{motta.price}</span>
                            <span>{motta.sla}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;