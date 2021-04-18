import React from 'react'

function Pokemon({pokemon}) {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={pokemon.image} alt={pokemon.name} className='pokemon-image' />
        </div>
        <div className='card-back'>
          <h3>{pokemon.name}</h3>
          <ul>
          <li>
              <strong>Class : </strong> {pokemon.classification}
            </li>
            <li>
              <strong>Type : </strong> {pokemon.types}
            </li>
            <li>
              <strong>Resistance : </strong> {pokemon.resistant}
            </li>
            <li>
              <strong>Weakness : </strong> {pokemon.weakness}
            </li>
            <li>
              <strong>Max HP : </strong> {pokemon.maxHP}
            </li>
            <li>
              <strong>Max CP : </strong> {pokemon.maxCP}
            </li>
            <li>
              <strong>Flee Rate : </strong> {pokemon.fleeRate}
            </li>
            <li>
            <strong>Special Attacks : </strong> 
            {pokemon && 
            pokemon.attacks &&
            pokemon.attacks.special
            .slice(0,3)
            .map(attack=>(
                <span key={`${attack.name}-${attack.damage}`}>
                    {attack.name}
                </span>
            ))}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
        // <div>
        // <div className='pokemon_name'>
        //     <p>{pokemon.name}</p>
        // </div>
        // <div className='pokemon_meta'>
        //     <span>{pokemon.maxHP}</span>
        //     <span>{pokemon.maCHP}</span>
        // </div>
        // <div className='pokemon_image'>
        //     <img src={pokemon.image} alt={pokemon.name}/>
        // </div>
        // <div className='pokemon_attacks'>
        //  {pokemon && 
        //     pokemon.attacks &&
        //     pokemon.attacks.special
        //     .slice(0,3)
        //     .map(attack=>(
        //         <span key={`${attack.name}-${attack.damage}`}>
        //             {attack.name}
        //         </span>
        //     ))}
        // </div>
        // </div>
    )
}

export default Pokemon
