import React from 'react'

const CompA = props => 
    <div>
        <h1>Primeiro diz: </h1> 
        <p>{props.valor}</p>
    </div>

const CompB = props => 
    <div>
        <h1>Segundo diz:</h1>    
        <p>{props.valor}</p>
    </div>

export {CompA, CompB}