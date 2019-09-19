import React, { Component } from 'react'
import TechItem from './Techitem';

class TechList extends Component {
  state = { 
    newTech:'',
    techs:[]
   };

   //Executado quando o componente aparece na tela
   componentDidMount(){
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState({techs: JSON.parse(techs)})
    }
   }

   //Executa quando a alteração no estado
   componentDidUpdate(_, prevState){
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
   }

   //Executado quando o componente deixa de existir
   componentWillMount(){

   }


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