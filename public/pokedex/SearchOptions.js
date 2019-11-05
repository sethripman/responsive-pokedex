import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/`
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
        `;
    }
}

export default SearchOptions;