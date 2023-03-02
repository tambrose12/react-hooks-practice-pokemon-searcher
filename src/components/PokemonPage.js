import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(setPokemonArray)
  }, [])


  //SEARCH
  const [searchedPokemon, setSearchedPokemon] = useState('')

  const toggleSearch = aNewString => {
    setSearchedPokemon(aNewString.toLowerCase())
  }

  const searched = pokemonArray.filter(poke => {
    return poke.name.includes(searchedPokemon)
  })


  //SUBMIT NEW
  const addNewPoke = (newPokeObj) => {
    setPokemonArray([...pokemonArray, newPokeObj])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke} />
      <br />
      <Search toggleSearch={toggleSearch} />
      <br />
      <PokemonCollection pokemon={searched} />
    </Container>
  );
}

export default PokemonPage;
