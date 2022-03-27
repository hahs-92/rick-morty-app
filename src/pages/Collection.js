import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//actions creator
import { getCharactersByQuery } from '../actions'
//components
import { Character } from '../components/Character'
import { ListCharacters } from "../components/ListCharacters"
import { QueryWrapper } from "../components/QueryWrapper"


export const Collection = () => {
    const dispatch = useDispatch()
    const charactersByQuery = useSelector(state => state.charactersByQuery)
    const { key, value } = useSelector(state => state.query)

    useEffect(() => {
        dispatch(
            getCharactersByQuery(`https://rickandmortyapi.com/api/character/?${key}=${value}`)
        )
    },[key, value])


    return (
        <main className="flex flex-wrap justify-center mt-3 p-3">
            <QueryWrapper />
            <ListCharacters>
                {
                    charactersByQuery && charactersByQuery.map(char => (
                        <Character
                        key={char.id }
                        id={ char.id }
                        name={ char.name }
                        specie={ char.species}
                        image= { char.image }
                    />
                    ))
                }
            </ ListCharacters>
        </main>
    )
}
