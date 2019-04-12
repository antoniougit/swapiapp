import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/searchBox';
import Selection from '../components/Selection';
import FilmsList from '../components/filmsList';
import PeopleList from '../components/peopleList';
import SpeciesList from '../components/speciesList';
import PlanetsList from '../components/planetsList';
import StarshipsList from '../components/starshipsList';
import VehiclesList from '../components/vehiclesList';
import Navigation from '../components/Navigation';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      films: [],
      people: [],
      species: [],
      planets: [],
      starships: [],      
      vehicles: [],
      searchfield: '',
      route: 'selection',
    };
  }

  // TODO - Fetch all pages
  // componentDidMount(){
  //   const peopleURLS=[
  //   "https://swapi.co/api/people/",
  //   "https://swapi.co/api/people/?page=2",
  //   "https://swapi.co/api/people/?page=3",
  //   "https://swapi.co/api/people/?page=4",
  //   "https://swapi.co/api/people/?page=5",
  //   "https://swapi.co/api/people/?page=6",
  //   "https://swapi.co/api/people/?page=7",
  //   "https://swapi.co/api/people/?page=8",
  //   ];

  //   Promise.all(peopleURLS.map(async url => {
  //     const resp = await fetch(url);
  //     const mainResp =await resp.json();
  //     let lastResp = this.state.people;
  //     lastResp.push(mainResp.results);
  //     var sortedArrayOfPeople = lastResp
  //       .flat()
  //     .sort((a, b) => a.name.localeCompare(b.name));
  //     this.setState({people:sortedArrayOfPeople})
  //   }))
  // }

  onButtonSelection = (route) => {
    this.setState({route: route});
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const {results,searchfield,route} = this.state;
    if(this.state.route !== 'selection'){
      fetch(`https://swapi.co/api/${this.state.route}/`)
    .then(response => response.json())
    .then(data => this.setState({results:data.results}));
    }
    if(route === 'films'){
      var resultsFiltered = results
                            .filter(result => {
                              return result.title.toLowerCase().includes(searchfield.toLowerCase());
                            })
                            .sort((a, b) => a.episode_id < b.episode_id ? -1 : 1);
    } else {
      var resultsFiltered = results
                            .filter(result => {
                              return result.name.toLowerCase().includes(searchfield.toLowerCase());
                            })
                            .sort((a, b) => a.name < b.name ? -1 : 1);
    }
    if(results.length === 0 && route !== 'selection'){
      return <h1 className='tc pt6'>Loading...</h1>
    } else {
    switch (route) {
      case 'selection':
        return(
          <div className="tc">
            <h1 className='f1'>Star Wars</h1>
            <h2 className='f3 pt3'>Search through your favourite Star Wars data!</h2>
            <Selection onButtonSelection={this.onButtonSelection}/>
          </div>
        );
      case 'films':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>  
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite film!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <FilmsList films={resultsFiltered}/>
          </div>
        );
      case 'people':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite people!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PeopleList people={resultsFiltered}/>
          </div>
        );
      case 'species':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite species!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <SpeciesList species={resultsFiltered}/>
          </div>
        );
      case 'planets':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite planet!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <PlanetsList planets={resultsFiltered}/>
          </div>
        );
      case 'starships':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite starship!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <StarshipsList starships={resultsFiltered}/>
          </div>
        );
      case 'vehicles':
        return(
          <div className="tc">
            <Navigation onButtonSelection={this.onButtonSelection}/>
            <h1 className='f1'>Star Wars</h1>
            <h2>Search for your favourite vehicle!</h2>
              <SearchBox searchChange={this.onSearchChange}/>
              <VehiclesList vehicles={resultsFiltered}/>
          </div>
        );
    }
  }
    

    
  }
}

export default App;
