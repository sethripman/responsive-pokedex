import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1>This is the Pokedex!</h1>
                <img display="inline" class="logo" src="https://p7.hiclipart.com/preview/878/465/223/overwatch-d-va-bit-roadhog.jpg" alt="Pokedex Time">
                <hr>
            </header>
        `;
    }
}

export default Header;