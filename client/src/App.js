import React from 'react';
import axios from 'axios';
import Header from './components/Header'
import PlayerList from './components/PlayerList';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      name:"",
      country:"",
    };
  }

    componentDidMount(){
      axios.get("http://localhost:5000/api/players")
      .then(response=>{
        this.setState({
          data: response.data
        });
      })
      .catch (err =>console.log(err))
    }
  render (){
    return(
      <div className = "App" id="app">
        <Header />
        <PlayerList 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;