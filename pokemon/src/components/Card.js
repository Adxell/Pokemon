import React from "react";

const Card = (props) => {
  return (
    <div className="pokemon-card">
      <div className="pokemom-img">
      </div>
      <div>
        {props.pokemons.map((prop, _index) => {
          const container = prop.types.map((type) => type.type);
          
          return (
            <div key={_index}>
              <img src={prop.sprites.front_default} alt={prop.name} />
              <h3>{prop.name}</h3>
              <div>#{prop.id}</div>
              <div>
                <h3>typo {container[0].name}</h3>
              </div>
            </div>
          );
        })}
      </div>
      {props.pokemons.map((prop, _index) => {
        const container = prop.types.map( (type)=>type.type);
        console.log(container[0]);
          {container.map((typ) => {
            console.log(typ.name)
            return (
                <div>
                  <h3>typo {typ.name}</h3>
                </div>
              );
          })}
      })}
    </div>
  );
};

export default Card;
