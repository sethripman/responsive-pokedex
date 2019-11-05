// IMPORT MODULES under test here:
// import example from '../src/example.js';
import Header from '../pokedex/Header.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = `
            <header>
                <h1>This is the Pokedex!</h1>
                <hr>
            </header>
        `;

    //Act 
    // Call the function you're testing and set the result to a const
    const newHeader = new Header();
    const newHeaderDOM = newHeader.renderHTML();

    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(newHeaderDOM, expected);
});