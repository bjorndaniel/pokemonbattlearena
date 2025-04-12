# Pokémon Explorer & Battle Arena

A web-based Pokémon application that lets you browse, explore, and battle with your favorite Pokémon.

![Pokemon Banner](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png)

## Features

### Pokémon Explorer
- Browse through the complete Pokédex
- Search for Pokémon by name or ID
- Filter Pokémon by type
- View detailed information for each Pokémon:
  - Official artwork
  - Types
  - Base stats
  - Physical characteristics
  - Evolution chains
  - Abilities and more

### Battle Arena
- Select Pokémon to battle against each other
- Choose Pokémon by search or from a browsable list
- Turn-based battle system
- Type effectiveness calculations
- Dynamic attack animations
- Battle log with play-by-play commentary
- Victory and defeat conditions

## Technical Details

This application is built with:
- HTML5
- CSS3 with Tailwind CSS
- Vanilla JavaScript (ES6+)
- RESTful API consumption

### API Integration
The app utilizes the public [PokéAPI](https://pokeapi.co/) to fetch Pokémon data including:
- Basic information
- Sprites and artwork
- Type information
- Stats
- Evolution chains
- Abilities

## Pages

1. **Home Page** (index.html)
   - Browse and search for Pokémon
   - Filter by type
   - Paginated list view
   - Theme changes based on selected Pokémon type

2. **Pokémon Details** (pokemon-details.html)
   - Comprehensive information about a specific Pokémon
   - Evolution chain visualization
   - Stats visualization with progress bars
   - Type-themed UI

3. **Battle Arena** (pokemon-battle.html)
   - Select two Pokémon to battle
   - Battle mechanics with type advantages
   - Visual effects for attacks
   - HP bars and battle results

## How to Use

1. Open `index.html` to browse the Pokémon list
2. Click on any Pokémon to view details
3. Navigate to the Battle Arena to start a battle
4. Select two Pokémon and enjoy the battle!

## Future Enhancements

- Add more complex battle mechanics
- Include Pokémon moves with different effects
- Implement team battles
- Add sound effects
- Implement local storage to save favorite Pokémon
- Create user accounts and online battles

---

*This project was created for educational and entertainment purposes. Pokémon and all related trademarks belong to Nintendo, Game Freak, and The Pokémon Company.*