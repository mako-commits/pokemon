import React from "react";

function Pokemon({ pokemon }) {
  return (
    <div class="pokemon">
      <figure class="pokemon__card">
        <img src={pokemon.image} alt={pokemon} />

        <figcaption>
          <h3 className="pokemon__card-name">{pokemon.name}</h3>
          <ul>
            <li>
              <strong>Name : </strong> {pokemon.name}
            </li>
            <li>
              <strong>Type : </strong> {pokemon.types}
            </li>

            <li>
              <strong>Resistance : </strong>
              {pokemon.resistant.map((res, index) => (
                <span key={index}>{res}, </span>
              ))}
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
                pokemon.attacks.special.slice(0, 3).map((attack) => (
                  <li key={`${attack.name}-${attack.damage}`}>
                    {attack.name} - {attack.damage}
                  </li>
                ))}
            </li>
          </ul>
        </figcaption>
      </figure>

      {/* <div className="blog-slider">
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
              <img src={pokemon.image} alt="" />
            </div>
            <div className="blog-slider__content">
              <h3 className="pokemon__card-name">{pokemon.name}</h3>
              <ul>
                <li>
                  <strong>Name : </strong> {pokemon.name}
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
                      .slice(0, 3)
                      .map((attack) => (
                        <span key={`${attack.name}-${attack.damage}`}>
                          {attack.name}
                        </span>
                      ))}
                </li>
              </ul>
            </div>
          </div>
        </div> */}
    </div>

    // <div className="card">
    //   <div className="card-inner">
    //     <div className="card-front">
    //       <img
    //         src={pokemon.image}
    //         alt={pokemon.name}
    //         className="pokemon-image"
    //       />
    //     </div>
    //     <div className="card-back">
    //       <h3 className="text-red-500">{pokemon.name}</h3>
    //       <ul>
    //         <li>
    //           <strong>Name : </strong> {pokemon.name}
    //         </li>
    //         <li>
    //           <strong>Type : </strong> {pokemon.types}
    //         </li>
    //         <li>
    //           <strong>Resistance : </strong> {pokemon.resistant}
    //         </li>
    //         <li>
    //           <strong>Weakness : </strong> {pokemon.weakness}
    //         </li>
    //         <li>
    //           <strong>Max HP : </strong> {pokemon.maxHP}
    //         </li>
    //         <li>
    //           <strong>Max CP : </strong> {pokemon.maxCP}
    //         </li>
    //         <li>
    //           <strong>Flee Rate : </strong> {pokemon.fleeRate}
    //         </li>
    //         <li>
    //           <strong>Special Attacks : </strong>
    //           {pokemon &&
    //             pokemon.attacks &&
    //             pokemon.attacks.special
    //               .slice(0, 3)
    //               .map((attack) => (
    //                 <span key={`${attack.name}-${attack.damage}`}>
    //                   {attack.name}
    //                 </span>
    //               ))}
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
    // /////////////////////////////////////////////////////////////////////////////
    // <div>
    // <div classNameName='pokemon_name'>
    //     <p>{pokemon.name}</p>
    // </div>
    // <div classNameName='pokemon_meta'>
    //     <span>{pokemon.maxHP}</span>
    //     <span>{pokemon.maCHP}</span>
    // </div>
    // <div classNameName='pokemon_image'>
    //     <img src={pokemon.image} alt={pokemon.name}/>
    // </div>
    // <div classNameName='pokemon_attacks'>
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
  );
}

export default Pokemon;
