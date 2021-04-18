import React from 'react'

function Pokemon({pokemon}) {
    return (
        <div>
        <div className='pokemon_name'>
            <p>{pokemon.name}</p>
        </div>
        <div className='pokemon_meta'>
            <span>{pokemon.maxHP}</span>
            <span>{pokemon.maCHP}</span>
        </div>
        <div className='pokemon_image'>
            <img src={pokemon.image} alt={pokemon.name}/>
        </div>
        <div className='pokemon_attacks'>
         {pokemon && 
            pokemon.attacks &&
            pokemon.attacks.special
            .slice(0,3)
            .map(attack=>(
                <span key={`${attack.name}-${attack.damage}`}>
                    {attack.name}
                </span>
            ))}
        </div>
        </div>
    )
}

export default Pokemon
