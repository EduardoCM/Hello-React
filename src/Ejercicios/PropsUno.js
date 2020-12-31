import React, { Component } from 'react';
import { render } from 'react-dom';



function A(props){
    return <p>Hola: {props.nombre}</p>;
}


function B(props){
    return <p>Adios: {props.nombre}</p>
}

class PropsUno extends Component {

    render(){
        
        let nombre = "Eduardo Castillo Mendoza";

        return (
            <div>
                <A nombre={nombre}/>

                <B nombre={nombre} />
            </div>
        )
    }
}


export default PropsUno;