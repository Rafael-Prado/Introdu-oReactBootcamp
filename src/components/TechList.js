import React, { Component } from 'react'
import TechItem from './Techitem';

class TechList extends Component {
  state = { 
    newTech:'',
    techs:[
      'Node.js',
      'React Js',
      'React Native',
    ]
   };

   handleInputChange = e => {
    this.setState({ newTech: e.target.value })
   }
   handleSubmit = e => {
    e.preventDefault();
    
    this.setState({techs:      
      [...this.state.techs, this.state.newTech ],
      newTech: ''    
    })    
   }
   hadleDelete = (tech) => {
    this.setState({techs: this.state.techs.filter(t => t !== tech)})
   }


  render(){
    return(      
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem key={tech} 
            tech={tech} 
            onDelete={() => this.hadleDelete(tech)} 
            /> 
          ))}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default TechList;