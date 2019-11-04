import Component from '../Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';

class App extends Component {

    async onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const optionsSection = dom.querySelector('.search-inputs');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.pokeList');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        const pokeListDOM = pokeList.renderDOM();
        listSection.appendChild(pokeListDOM);

        const pokemon = await getPokemon();
        const pokemonset = pokemon.results;

        pokeList.update({ pokemon: pokemonset });
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