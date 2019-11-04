import Component from '../Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import pokemon from '../assets/sample-pokemon.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            pokemon: pokemon
        };

        const pokeList = new PokeList(props);
        const pokeListDOM = pokeList.renderDOM();

        const listSection = dom.querySelector('.pokeList');
        listSection.appendChild(pokeListDOM);


        /*const filterImages = new FilterImages({
            images: images,
            onFilter: (imageType) => {
                let filteredImages;
                if (!imageType) {
                    filteredImages = images;
                }
                else {
                    filteredImages = images.filter(image => {
                        return image.keyword === imageType;
                    });
                }

                const updateProps = { images: filteredImages };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);*/

    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header goes here -->
        
                <main>
                    <section class="options-section">
                        <!-- Filter Images goes here -->
                    </section>

                    <section class="list-section">
                        <!-- ImageList goes here -->
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;