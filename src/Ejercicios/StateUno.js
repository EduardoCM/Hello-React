import React, { Component } from 'react';
import { render } from 'react-dom';


class Contador extends Component {

    constructor(props){
        super(props);

        this.state = {
            contador: 1
        };
    }


    aumentar = () => { this.setState({contador: this.state.contador + 1})}

    render(){
        return (
            <div>
              <p>{this.state.contador}</p>
              <button onClick={this.aumentar}>Aumentar</button>

            </div>
        );
    }
}


class StateUno extends Component {

    render(){
    
        return (
            <div>
               <Contador />
            </div>
        )
    }
}


export default StateUno;