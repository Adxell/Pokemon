import Navbar from './components/Nav'
import SearchBar from './components/SearchBar';
import Result from './components/Results';
import { useState, useEffect } from 'react';
import { getPokemonData, getPokemos } from './api';

function App() {
  const [pokemon, setPokemon]=useState([])
  //console.log(pokemon)
  const fechPokemon= async ()=>{
      try{
        const data = await getPokemos();
        //console.log(data)
        const promises = data.results.map(async (poke) => {
           return await getPokemonData(poke.url);
        });
        //console.log(promises)
        const results= await Promise.all(promises);
        setPokemon(results);
        //console.log(results)
       
      }catch(err){
        console.log(err);
      }
  }
  useEffect(() => {
    fechPokemon()
  },[])
  return (
    <div>
    <Navbar/>
    <div className="app">
        <SearchBar/>
        <Result pokemos={pokemon}/>
    </div>
    </div>
  )
}

export default App;
