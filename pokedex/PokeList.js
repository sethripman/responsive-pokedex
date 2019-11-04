import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class="pokeList"></ul>
        `;
    }

    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokeItem = new PokeItem(props);
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });
    }
}

export default PokeList;