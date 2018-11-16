import {Player} from "./LI";
import React from 'react'


export const PList = ( player ) => (
    <ul>
        {player.map( p => (
         <Player name={p.name}/>
        ))}
    </ul>

)