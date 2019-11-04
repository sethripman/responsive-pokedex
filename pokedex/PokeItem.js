import Component from '../Component.js';

class PokeItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
        <li class="pokeItem">
                    <div>
                        <img class="pokeItemImage" src=${pokemon.url_image}>
                    </div>
                    <div class="pokeItemName">
                        ${pokemon.pokemon}
                    </div>
                    <div class="pokeViewHeight">
                        ${pokemon.height} 
                    </div>
                    <div class="pokeViewWeight">
                        ${pokemon.weight}
                    </div>
                    <div class="pokeViewElement1">
                        ${pokemon.type_1}
                    </div>
                    <div class="pokeViewElement2">
                        ${pokemon.type_2}
                    </div>
                </li>
        `;
    }
}

export default PokeItem;