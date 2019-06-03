import React from 'react'

const comp = (props) => 
    <div>
        <ul>
            <li>Nome: {props.nome}</li>
            <li>Sexo: {props.sexo}</li>
            <li>Idade: {props.idade}</li>
        </ul>
    </div>

export default comp;