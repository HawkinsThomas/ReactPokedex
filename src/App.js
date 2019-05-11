import React from 'react';
import MainHeader from './components/MainHeader';
import Pokemon from './components/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      url: null,
     };
    this.search = this.search.bind(this);
  }

  search(pokemonName) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
      .then(response => response.json())
      .catch((e) => {console.log(e)})
      .then((pokeResult) => {
        const resultUrl = pokeResult.sprites.front_default;
        this.setState({
          PokeImgSrc: resultUrl,
          pokemon: pokemonName,
          url: url,
        })
      })
      .catch(() => this.setState({
        pokemon: null,
        url: null,
      }));


    return ;
  }

  render() {
    return (
      <div>
        <MainHeader heading="Pokédex" onSubmit={this.search} />

        {this.state.pokemon === null ? (
          <Pokemon name="No Results" imgSrc="/placeholder.png" />
        ) : (
          <Pokemon name={this.state.pokemon} imgSrc={this.state.PokeImgSrc} />
        )}
      </div>
    );
  }
}

export default App;
