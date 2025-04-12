/**
 * Pokemon API Service
 * This file contains functions to fetch pokemon data from the public PokéAPI
 */

// Base URL for the PokéAPI
const API_BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * Fetch a list of pokemons with pagination
 * @param {number} limit - Number of pokemons to fetch (default: 20)
 * @param {number} offset - Starting index for pagination (default: 0)
 * @returns {Promise} Promise containing pokemon list data
 */
async function getPokemons(limit = 20, offset = 0) {
    try {
        const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch pokemons: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        throw error;
    }
}

/**
 * Fetch detailed data for a specific pokemon by name or ID
 * @param {string|number} nameOrId - Pokemon name or ID
 * @returns {Promise} Promise containing detailed pokemon data
 */
async function getPokemonDetails(nameOrId) {
    try {
        const response = await fetch(`${API_BASE_URL}/pokemon/${nameOrId.toString().toLowerCase()}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon details: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching details for pokemon ${nameOrId}:`, error);
        throw error;
    }
}

/**
 * Fetch pokemon species data which includes evolution chain, flavor text, etc.
 * @param {string|number} nameOrId - Pokemon name or ID
 * @returns {Promise} Promise containing pokemon species data
 */
async function getPokemonSpecies(nameOrId) {
    try {
        const response = await fetch(`${API_BASE_URL}/pokemon-species/${nameOrId.toString().toLowerCase()}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon species: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching species data for pokemon ${nameOrId}:`, error);
        throw error;
    }
}

/**
 * Search for pokemons by type
 * @param {string} type - Pokemon type (e.g., 'fire', 'water')
 * @returns {Promise} Promise containing pokemons of the specified type
 */
async function getPokemonsByType(type) {
    try {
        const response = await fetch(`${API_BASE_URL}/type/${type.toLowerCase()}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch pokemons by type: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching pokemons of type ${type}:`, error);
        throw error;
    }
}

// Export functions for use in other files
export {
    getPokemons,
    getPokemonDetails,
    getPokemonSpecies,
    getPokemonsByType
};