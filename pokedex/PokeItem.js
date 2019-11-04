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
                        Name: ${pokemon.pokemon}
                    </div>
                    <div class="pokeViewHeight">
                        ${pokemon.height} meters
                    </div>
                    <div class="pokeViewWeight">
                        ${pokemon.weight} kg
                    </div>
                    <div class="pokeViewElement1">
                        Type 1 = ${pokemon.type_1}
                    </div>
                    <div class="pokeViewElement2">
                        Type 2 = ${pokemon.type_2}
                    </div>
                </li>
        `;
    }
}

export default PokeItem;