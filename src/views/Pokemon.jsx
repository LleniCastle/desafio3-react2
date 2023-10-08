import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../App.css'

const Pokemon = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchPokemonData();
    }, [id]);

    return (
        <div className="container mt-5">
            {pokemonData && (
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-4">
                        <img
                            src={pokemonData.sprites.other["official-artwork"].front_default}
                            className="img-fluid"
                            alt={pokemonData.name}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{pokemonData.name}</h5>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>ID:</strong> {pokemonData.id}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>HP:</strong> {pokemonData.stats[0].base_stat}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Attack:</strong> {pokemonData.stats[1].base_stat}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Defense:</strong> {pokemonData.stats[2].base_stat}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Special Attack:</strong> {pokemonData.stats[3].base_stat}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Special Defense:</strong> {pokemonData.stats[4].base_stat}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Speed:</strong> {pokemonData.stats[5].base_stat}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pokemon;
