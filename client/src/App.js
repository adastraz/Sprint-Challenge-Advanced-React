import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import DarkMode from './DarkMode'
import Card from './Card'

const Direction = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-around;
align-items:space-around
`
const Pretty = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 22%;
justify-content: space-around;
padding:1% 1%;
background: plum;
margin:2% 0;
color:powderblue;
border-radius:20px;
`
class App extends Component{
  state = {
    players: [],
    playerList:[]
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        this.setState({players: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
  render(){
    return (
      <>
        <DarkMode /> 
        <div className='.dark-mode #letssee'>
          
          {this.state.players.map(item => (
            <Card 
            key={item.id}
            item={item}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
