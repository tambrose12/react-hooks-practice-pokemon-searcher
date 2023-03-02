import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const renderPokemonCards = pokemon.map(pokemonObj => {
    return <PokemonCard key={pokemonObj.id} {...pokemonObj} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
