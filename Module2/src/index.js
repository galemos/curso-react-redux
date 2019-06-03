import React from 'react'
import ReactDOM from 'react-dom'

import PrimeiroComponente from './compenents/PrimeiroComponente'
import PrimeiroComponentePessoal from './compenents/PrimeiroComponentePessoal'
import {CompA, CompB} from './compenents/DoisComponentes.jsx'
import MultiElementos from './compenents/MultiElementos'

const today = new Date();

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Hello World!"/>
        <hr/>
        <PrimeiroComponentePessoal nome="Gabriel Lemos" sexo="Masculino" idade={today.getFullYear() - 1991}/>
        <hr/>
        <CompA valor="Dois componentes em um arquivo?"/>
        <br/>
        <CompB valor="Realmente são dois componentes em um unico arquivo!"/>
        <hr/>
        <MultiElementos/>
    </div>
    , elemento);