import React, { useState, useEffect } from 'react'; 

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10') // Fetching first 10 Pokemon
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results);
            })
            .catch(error => console.error('Error fetching Pokemon:', error));
    }, []);

    const getPokemonDetails = async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching Pokemon details:', error);
        }
    };

    const [pokemonDetails, setPokemonDetails] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const details = await Promise.all(
                pokemonList.map(pokemon => getPokemonDetails(pokemon.url))
            );
            setPokemonDetails(details);
        };
        fetchPokemonDetails();
    }, [pokemonList]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Pokémon List</h1>
            <div className="row">
                {pokemonDetails.map((pokemon, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                            <div className="card-body">
                                <h5 className="card-title">{pokemon.name}</h5>
                                <p className="card-text"><strong>Type:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
                                <p className="card-text"><strong>Abilities:</strong> {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;