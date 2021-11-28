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
            <div className="searchbar">
                <input type="text" 
                placeholder="Search pokemon"
                onChange={onChange}
                />
            </div>
            <div className="searchbar-btn">
                <button  onClick={onClick}><i className="fas fa-search"></i></button>
            </div>
        </div>
    )
}

export default SearchBar;