import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPoke }) {

  const [nameInput, setNameInput] = useState('')
  const [hpInput, setHpInput] = useState('')
  const [frontUrlInput, setFrontUrlInput] = useState('')
  const [backUrlInput, setBackUrlInput] = useState('')

  const newPoke = {
    name: nameInput,
    hp: hpInput,
    sprites: {
      front: frontUrlInput,
      back: backUrlInput
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3001/pokemon", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPoke),
    })
      .then((response) => response.json())
      .then(() => addNewPoke(newPoke))

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={e => setNameInput(e.target.value)} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={e => setHpInput(e.target.value)} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={e => setFrontUrlInput(e.target.value)}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={e => setBackUrlInput(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
