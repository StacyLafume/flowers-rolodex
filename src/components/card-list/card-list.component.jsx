import React from 'react';

import { Card } from '../card/card.component'
import './card-list.styles.css'

export const CardList = props => {
    return <div className="card-list">
        {
        props.techies.map((techie, i,array) => (
          <Card key={i} techie={techie}  clips={props.clips[array.indexOf(techie)]} tags={props.tags[i]}/>
          
      ))}
    </div>
}
