import React from 'react'
import './card.styles.css'

export const Card = props =>{ 
    return (
    <div className="card-container">
        <p>{props.tags[0]}</p>
        <iframe src={props.clips[0]} alt="techie"/>
         <h2 key={props.techie[1]}>{props.techie.name}</h2>  
    </div>
    )
}
