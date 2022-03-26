import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//actions creator
import { getCharacters } from '../actions'
//components
import { Character } from '../components/Character'
import { Form } from "../components/Form"


export const Dashboard = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)


    const fecthData = () => {
        dispatch(getCharacters("https://rickandmortyapi.com/api/character/?page=1"))
    }

    useEffect(() => {
        fecthData()
    },[])


    return (
        <main className="mt-3 p-3">

            <Form />
            <section className="grid sm:grid-cols-2 gap-2 mt-6 md:grid-cols-3 xl:grid-cols-5 xl:gap-4 ">
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
            </section>
        </main>
    )
}
