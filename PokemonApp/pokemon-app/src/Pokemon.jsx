import "./index.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { PokemonCards } from "./PokemonCards";
export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")
    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";
    const fetchPokemon = async () => {

        try {
            const res = await axios.get(API)
            //console.log(res)
            const singleURL = res.data.results.map(async (currPokemon) => {
                //console.log(currPokemon.url)
                const res = await axios(currPokemon.url)
                // console.log(res)
                return res.dat
            })
            // console.log(singleURL)
            const detailedResponses = await Promise.all(singleURL)
            console.log(detailedResponses)
            // return detailedResponses instead of this we will make state var coz this data can be changed in future
            setPokemon(detailedResponses)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            setError(error)
        }
    }
    useEffect(() => {
        fetchPokemon()
    }, [])
    const searchData = pokemon.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    if (loading) {
        return (<>
                <h1>Loading...</h1>
            </>
        )
    }
    if (error) {
        return (<>
            <h1>{error.message}</h1>
        </>)
    }
    return ( <>
            <section className="container">
                <header>
                    <h1>Pokemon Pedia</h1>
                </header>
                <div className="pokemon-search">
                    <input type="text" placeholder="Search your fav Pokemon" value={search} 
                    onChange={(e)=>setSearch(e.target.value)}/>
                </div>
                <div>
                    <ul className="cards">
                        {searchData.map((currPokemon) => {
                            // return <li key={currPokemon.id}>{currPokemon.name}</li>
                            return <PokemonCards key={currPokemon.id} pokemonData={currPokemon}onChange={(e) => setSearch(e.target.value)} />
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}