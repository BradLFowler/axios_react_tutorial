import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import BeerCard from './BeerCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      arrOfBeer: []
    }
  }

  componentDidMount() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const arrOfBeer = res.data
      this.setState({ arrOfBeer })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
           <ol>{this.state.arrOfBeer.map((beer, index) => {
              return(
                <BeerCard key={index} name={beer.name} image_url={beer.image_url} tagline={beer.tagline} first_brewed={beer.first_brewed} description={beer.description} abv={beer.abv} />
              )
           })}
           </ol>
        </header>
      </div>
    );
  }
}

export default App;
