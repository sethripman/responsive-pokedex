import Component from './Component.js';
import Header from './pokedex/Header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- header goes here -->
                
                <main>
                    <p>
                        Voila it'sa homepage.
                        <a href="./pokedex/pokedex.html">Click here to see the Pokedex</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;