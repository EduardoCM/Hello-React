import React, { Component } from 'react';
import { render } from 'react-dom';

import './style.css';


class Blog extends Component {
    
    constructor(props){
        super(props);
        this.state = {

            articles: []

        //    articles: [
        //        'Aprendiendo React',
        //        'Que es React?',
        //        'Introduccion a React'
        //    ]

        
        }
    }


    componentDidMount(){
      let promesa =  fetch('https://jsonplaceholder.typicode.com/posts');

     
      promesa.then(response => response.json()).then(data => {
       this.setState({
           articles: data
       })
      })

    }

    
    render() {
        return (
            <div>
                {
                    this.state.articles.map((article) => {
                        return <div className="card" style={{background:'red'}}><p>{article.title}</p></div>
                    })
                }
            </div>
        )
    }
}




class FormularioColecciones extends Component {

    render(){
    
        return (
            <div>
              <Blog />
            </div>
        )
    }
}


export default FormularioColecciones;