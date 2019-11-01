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