import React from "react";
import { useState } from "react";
import  {searchPokemon}  from "../api";
const SearchBar=()=>{
    const [search, setSearch]=useState('');
    const [pokemon, setPokemon]=useState();
    
    const onChange  =(e)=>{
        setSearch(e.target.value)
    }
    const onClick = async()=>{
        const data= await searchPokemon(search)
        setPokemon(data)
    }
    return (
        <div className="search-bar-container">
            <div className="serachbar">
                <input type="text" 
                onChange={onChange}
                />
            </div>
            <div>
                <button className="serachbar-btn" onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
}

export default SearchBar;