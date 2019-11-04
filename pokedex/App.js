import Component from '../Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemon from '../assets/sample-pokemon.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';


class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const optionsSection = dom.querySelector('.search-inputs');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const props = {
            pokemon: pokemon
        };

        const listSection = dom.querySelector('.pokeList');
        
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList(props);
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