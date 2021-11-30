import React from "react";
import Card from "./Card";

const Result = (props)=>{
    const poke = props.pokemos;
    //console.log(poke)
    return (
      <div>
        <div className="header">
          <h1>Pokedex</h1>
          <div>page</div>
        </div>
        <div className="grid-pokemon">
          <Card pokemons={poke}/>
        </div>
      </div>
    );
}

export default Result;