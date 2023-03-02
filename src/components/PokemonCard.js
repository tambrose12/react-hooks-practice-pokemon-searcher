import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites, id }) {

  const [isCardFront, setIsCardFront] = useState(true)

  const toggleImage = () => {
    setIsCardFront(!isCardFront)
  }



  return (
    <Card>
      <div onClick={toggleImage}>
        <div className="image">
          <img src={isCardFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
