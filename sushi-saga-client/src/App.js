import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state={
    sushiList: [],
    filtered: [],
    amount: 100
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
      sushiList: data
    })})
  }

  handleEatSushi = (sushiobj) => {
    let eatenSushi = [...this.state.sushiList].filter(sushi => sushi.id === sushiobj.id)
    let allChosen = [...this.state.filtered, eatenSushi]
    this.setState({
      filtered: allChosen,
      amount: this.state.amount - sushiobj.price
    })
  }
  render() {
    console.log(this.state.sushiList);
    return (
      <div className="app">
        <SushiContainer  sushiList={this.state.sushiList} handleClick={this.handleEatSushi} amount={this.state.amount}/>
        <Table sushiList={this.state.filtered} amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;
