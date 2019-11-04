import Component from '../Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';

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
    }
];

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const optionsSection = dom.querySelector('.search-inputs');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.pokeList');

        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: pokemon });
        const pokeListDOM = pokeList.renderDOM();
        listSection.appendChild(pokeListDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
        
                <main>
                    <div class="search-inputs">
                        <!-- Search Options goes here -->
                    </div>
                    <div class="pokeList">
                        <!-- PokeList goes here -->
                    </div>
                </main>
            </div>
        `;
    }
}

export default App;