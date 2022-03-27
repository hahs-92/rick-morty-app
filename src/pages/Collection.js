import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//actions creator
import { getCharactersByQuery, setQuery } from '../actions'
//components
import { Character } from '../components/Character'
import { ListCharacters } from "../components/ListCharacters"


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

            <section
                className="flex flex-wrap items-center justify-center w-full gap-5 md:justify-between lg:justify-start"
            >
                <div
                    className="relative mt-4 mb-1  w-full h-20 border border-dotted max-w-xs shadow-lg"
                    >
                    <h3 className="absolute -top-6 text-xl">Status</h3>
                    <div className="flex justify-between items-center px-2 h-full sm:max-w-xs">
                        <input
                            className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Alive"
                            onClick={() => dispatch(setQuery({key: "status",value: "alive" }))}
                        />
                        <input
                             className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Dead"
                            onClick={() => dispatch(setQuery({key: "status",value: "dead" }))}
                        />
                        <input
                             className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Unknown"
                            onClick={() => dispatch(setQuery({key: "status",value: "unknown" }))}
                        />
                    </div>
                </div>

                <div className="relative mt-4 w-full h-20 border border-dotted max-w-xs shadow-lg">
                    <h3 className="absolute -top-6 text-xl">Gender</h3>
                    <div className="flex justify-between items-center px-2 h-full ">
                        <input
                            className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Male"
                            onClick={() => dispatch(setQuery({key: "gender",value: "male" }))}
                        />
                        <input
                             className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Female"
                            onClick={() => dispatch(setQuery({key: "gender",value: "female" }))}
                        />
                        <input
                             className="h-9 w-20 border border-green-800 rounded-md hover:bg-green-800"
                            type="button"
                            value="Unknown"
                            onClick={() => dispatch(setQuery({key: "gender",value: "unknown" }))}
                        />
                    </div>
                </div>
            </section>

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
