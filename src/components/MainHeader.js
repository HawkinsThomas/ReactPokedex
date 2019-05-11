import React from 'react';
import { Navbar, Form, Input, Button } from 'reactstrap';
import './MainHeader.css';


class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemonName: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.pokemonName);
  };

  handlePokemonNameChange = (event) => {
    this.setState({pokemonName: event.target.value});
  };

  render() {
    return (
      <Navbar
        tag="header"
        className="main-header flex-column flex-md-row bd-navbar bg-dark"
        dark
        expand
      >
        <h1>{this.props.heading}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Input onChange={this.handlePokemonNameChange}/>
          <Button type="submit" color="info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default MainHeader;
