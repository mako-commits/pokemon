import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_POKEMONS } from '../graphql/get-pokemons'
import Pokemon from '../components/Pokemon'


function PokemonsContainer() {
    const {data:{pokemons =[]}={}} =useQuery(GET_POKEMONS,{
        variables:{first:20}
    })
    return (
        <div className='pokemons'>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )
}

export default PokemonsContainer
