Need another component - PokeViewItem

Header -> Title, cute animations - static
Main    -> SearchInputs - static - fetches our data from api
        -> ReturnToDex - static
        -> PokeList
        -> PokeListItem
        -> PokeViewItem
        -> FilterItem
Footer -> sort button - static - applies a sort function to our PokeList and updates

What is rendered:
PokeDex shows
    Header
    SearchInputs
    PokeList
        PokeListItems
    FilterItems

PokeView
    Header
    ReturnToDex
    PokeViewItem
    Footer

---

Mobile Dex                                                          Browser Dex
    Header                                                              Header
    SearchInputs                                                        SearchInputs
    PokeList                                                            PokeList
        PokeListItems                                                       PokeListItems
    FilterItems                                                         FilterItems


Mobile View                                                         Browser View
    Header                                                              Header
    ReturnToDex                                                         ReturnToDex
    PokeViewItem                                                        PokeViewItem
    Footer                                                              Footer

Dex display: none   ReturnToDex, PokeViewItem, FilterItems, Footer
View display: none  SearchInputs, PokeList, PokeListItems, FilterItems

But they persist so that we can easily switch back and forth. PokeViewItem gets updated every time we switch modes

Background Image = slice top away from body
Background top mobile = SearchInputs on dex, Return to Dex on view mode
Background body mobile = stretches vertically
Background top browser = Return to dex display hidden on dex, return to dex on view
Background body browser = Min width, breakpoint to mobile when we hit that width, stretch vertically + horizontally

//

scrapped css code snippets

.pokeItem {
    list-style: none;
    padding: 40px;
    background-color: #f4f4f4;
    color: #222;
    text-align: center;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 200px;
  width: 200px;
  border: 3px solid black;
}

.one {
  background: steelblue;
  color: white;
}

.two {
  background: orange;
  color: white;
}


@media (min-width:960px) {
  .one {
    background: lightsteelblue;
  }

  .two {
    background: coral;
  }
}


.search-inputs-mobile {

}

.pokelist-mobile {
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
}

.pokeitem-mobile {

}

.search-inputs-browser {
    
}

.pokelist-browser {
    padding-inline-start: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 20px;
}

.pokeitem-browser {

}