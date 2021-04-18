import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import Pokemon from '../components/Pokemon'
import Spinner from '../components/Spinner'


function PokemonsContainer() {
    const {loading, error, data:{pokemons =[]}={}} =useQuery(GET_POKEMONS,{
        variables:{first:151}
    })
    if (loading) return (
        <>
        <Spinner/>
    <center><h2>Loading...</h2></center>
    </>
    )
    if (error) return <p>Whoops...</p>
    return (
        <div className='cards'>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}

export default PokemonsContainer
