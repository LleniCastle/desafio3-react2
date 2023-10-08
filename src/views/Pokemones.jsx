import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../App.css'; 

const Pokemones = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
                const data = await response.json();
                setPokemonList(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPokemonList();
    }, []);

    const goToPokemon = () => {
        if (selectedPokemon) {
            const pokemonId = selectedPokemon.split("/")[6];
            navigate(`/pokemones/${pokemonId}`);
        } else {
            alert("Por favor, selecciona un Pokémon.");
        }
    };

    return (
        <div className="container center-container">
            <div className="row">
                <div className="col">
                <h1 className="title-pokemones">
                        Selecciona un Pokémon
                        <img src="https://media.tenor.com/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif" alt="Pokémon" className="gif" />
                    </h1>
                    <select className="form-select select-box mx-auto d-block" value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
                        <option value="">Selecciona un Pokémon</option>
                        {pokemonList.map((pokemon) => (
                            <option key={pokemon.url} value={pokemon.url}>
                                {pokemon.name}
                            </option>
                        ))}
                    </select>
                    <Button variant="primary" onClick={goToPokemon}>
                        Buscar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Pokemones;

