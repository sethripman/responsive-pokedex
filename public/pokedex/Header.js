import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1>This is the Pokedex!</h1>
                <hr>
            </header>
        `;
    }
}

export default Header;