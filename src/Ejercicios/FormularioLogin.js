import React, { Component } from 'react';
import { render } from 'react-dom';



class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }


    syncChanges(value, property){
        let state = {};
        state[property] = value;
        this.setState(state);
    }

/*
    syncEmailChanges(email){
     this.setState({
            email: email
        })
    }

    syncPasswordChange(password){
        this.setState({
            password: password
        })
    }
*/

    submitForm = () => {
        console.log(this.state);
    }

    render() {
        return (
            <form>
                <input onChange={(ev) => {this.syncChanges(ev.target.value, 'email')}} type="email" value={this.state.email} placeholder="Email" />
                <input onChange={(ev) => {this.syncChanges(ev.target.value, 'password')}} type="password" value={this.state.password} placeholder="*****" />

                <div>
                     <input onClick={ this.submitForm } type="submit" value="Iniciar sesion" />
                </div>

            </form>
        )
    }
}



class FormularioLogin extends Component {

    render(){
    
        return (
            <div>
               <Formulario />
            </div>
        )
    }
}


export default FormularioLogin;