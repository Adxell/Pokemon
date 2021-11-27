export const searchPokemon = async (pokemon)=>{
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const res = await fetch(url);
        const data= await res.json();
        return data;
    }catch(err){
        console.log(err)
    }
}