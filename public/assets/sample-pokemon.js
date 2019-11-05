const pokemon = [
    {
        '_id': '5cef3501ef6005a77cd4fdd0',
        'pokemon': 'pichu',
        'id': 187,
        'species_id': 172,
        'height': 3,
        'weight': 20,
        'base_experience': 41,
        'type_1': 'electric',
        'type_2': 'NA',
        'attack': 40,
        'defense': 15,
        'hp': 20,
        'special_attack': 35,
        'special_defense': 35,
        'speed': 60,
        'ability_1': 'static',
        'ability_2': 'NA',
        'ability_hidden': 'lightning-rod',
        'color_1': '#F8D030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'no-eggs',
        'egg_group_2': 'NA',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        'generation_id': 2,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 10,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'pichu',
        'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
    },

    {
        '_id': '5cef3501ef6005a77cd4fdd0',
        'pokemon': 'punkachu',
        'id': 187,
        'species_id': 172,
        'height': 5,
        'weight': 25,
        'base_experience': 41,
        'type_1': 'cheese',
        'type_2': 'bananas',
        'attack': 40,
        'defense': 15,
        'hp': 20,
        'special_attack': 35,
        'special_defense': 35,
        'speed': 60,
        'ability_1': 'static',
        'ability_2': 'NA',
        'ability_hidden': 'lightning-rod',
        'color_1': '#F8D030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'no-eggs',
        'egg_group_2': 'NA',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        'generation_id': 2,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 10,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'pichu',
        'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
    }
];

/* reference for static html page
<header>
        <h1>This is the Pokedex!</h1>
        <hr>
    </header>

    <main>
        <div id="content">
            <div id="search-inputs">
                <ul class="search-list">
                    <li><input type="text" id="pokename" size="10" placeholder="Pokename"></li>
                    <li><select class="poketype">
                            <option value="" selected>All Types</option>
                            <option value="bug">Bug</option>
                            <option value="dragon">Dragon</option>
                            <option value="electric">Electric</option>
                            <option value="fighting">Fighting</option>
                            <option value="fire">Fire</option>
                            <option value="flying">Flying</option>
                            <option value="ghost">Ghost</option>
                            <option value="grass">Grass</option>
                            <option value="ground">Ground</option>
                            <option value="ice">Ice</option>
                            <option value="normal">Normal</option>
                            <option value="poison">Poison</option>
                            <option value="psychic">Psychic</option>
                            <option value="rock">Rock</option>
                            <option value="water">Water</option>
                        </select></li>
                        <li><input type="number" id="minpokeattack" min="0" step="1" placeholder="Min Atk"></li>
                </ul>
            </div>
            <hr>
            <ul id="pokeList">
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                        <div>
                            <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                        </div>
                        <div class="pokeItemName">
                            Pichu
                        </div>
                    </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
                <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                    </div>
                    <div class="pokeItemName">
                        Pichu
                    </div>
                </li>
            </ul>

            <hr>

            <div class="pokeViewItem">
                <div class="backButton">
                    <button>Back to Dex</button>
                </div>
                <div class="pokeViewHeight">
                    3 meters
                </div>
                <div class="pokeViewName">
                    Pichu
                </div>
                <div class="pokeViewWeight">
                    20 kg
                </div>
                <div class="pokeViewElement1">
                    Electric
                </div>
                <div class="pokeViewImage">
                    <img class="pokeItemImage" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
                </div>
                <div class="pokeViewElement2">
                    None
                </div>
                <div class="pokeViewRadar">
                    Big Chart Goes Here
                </div>
        </div>
    </main>

    <footer>
        <hr>
        <div>Sorting</div>
        <select class="sort-filter">
                <option value="alphabet" selected>Alphabetically</option>
                <option value="id">ID Number</option>
                <option value="type">Element Type</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
                <option value="weight">Chonk Factor</option>
            </select>
    </footer>

*/

export default pokemon;