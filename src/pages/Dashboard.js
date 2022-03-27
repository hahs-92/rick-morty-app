import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//actions creator
import { getCharacters } from '../actions'
//components
import { Character } from '../components/Character'
import { Form } from "../components/Form"
import { CharacterItem } from "../components/CharacterItem"
import { ListCharacters } from "../components/ListCharacters"


export const Dashboard = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)
    const  charactersSearched = useSelector(state => state.charactersSearched)

    const fecthData = () => {
        dispatch(getCharacters("https://rickandmortyapi.com/api/character/?page=1"))
    }

    useEffect(() => {
        fecthData()
    },[])


    return (
        <main className="mt-3 p-3">

            <Form />
            <ListCharacters>
                {
                    charactersSearched && charactersSearched.map(char => (
                      <CharacterItem
                        key={char.id }
                        id={ char.id }
                        name={ char.name }
                        image= { char.image }
                      />
                    ))
                }
            </ ListCharacters>
            <ListCharacters>
                {
                    characters && characters.map(char => (
                        <Character
                            key={char.id }
                            id={ char.id }
                            name={ char.name }
                            image= { char.image }
                        />
                    ))
                }
            </ListCharacters>
        </main>
    )
}
