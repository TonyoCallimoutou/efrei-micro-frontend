import React, { useState, useEffect } from 'react'; 

function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=389') // Fetching first 389 Pokemon
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

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };

    const getTypeColor = (type) => {
        return typeColors[type] || 'black';
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Pokémon List</h1>
            <div className="row">
                {pokemonDetails.map((pokemon, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card">
                            <img src={pokemon.sprites.front_default} className="card-img-top" alt={pokemon.name} />
                            <div className="card-body">
                                <h5 className="card-title">{capitalizeFirstLetter(pokemon.name)}</h5>
                                <p className="card-text">
                                    <strong>Type :</strong> {pokemon.types.map(type => (
                                        <span key={type.type.name} style={{ color: getTypeColor(type.type.name) }}>
                                            {capitalizeFirstLetter(type.type.name)}
                                        </span>
                                    )).reduce((prev, curr) => [prev, ', ', curr])}
                                </p>
                                <p className="card-text">
                                    <strong>Capacités :</strong> {pokemon.abilities.map(ability => capitalizeFirstLetter(ability.ability.name)).join(', ')}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PokemonList;