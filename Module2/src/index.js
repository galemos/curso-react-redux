import React from 'react'
import ReactDOM from 'react-dom'

// import PrimeiroComponente from './compenents/PrimeiroComponente'
// import PrimeiroComponentePessoal from './compenents/PrimeiroComponentePessoal'
// import {CompA, CompB} from './compenents/DoisComponentes.jsx'
// import MultiElementos from './compenents/MultiElementos'
// import FamiliaLemos from './compenents/FamiliaLemos'
import Familia from './compenents/Familia';
import Membro from './compenents/Membro';

const today = new Date();

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <Familia sobrenome="Lemos">
            <Membro nome="Rafaela"/>
            {/* <Membro nome="Gabriel"/> */}
        </Familia>
        {/* <FamiliaLemos/> */}
       {/* <hr/>
        <PrimeiroComponente valor="Hello World!"/>
        <hr/>
        <PrimeiroComponentePessoal nome="Gabriel Lemos" sexo="Masculino" idade={today.getFullYear() - 1991}/>
        <hr/>
        <CompA valor="Dois componentes em um arquivo?"/>
        <br/>
        <CompB valor="Realmente são dois componentes em um unico arquivo!"/>
        <hr/>
        <MultiElementos/> */}
    </div>
    , elemento);