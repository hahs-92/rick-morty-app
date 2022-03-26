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
            <section className="grid sm:grid-cols-2 gap-2 mt-6 md:grid-cols-3 xl:grid-cols-5 xl:gap-4 ">
                {
                    charactersSearched && charactersSearched.map(char => (
                       <article
                            className="flex h-16 gap-x-4  p-2 cursor-pointer shadow-xl "
                            key={char.id}
                        >
                            <section>
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={char.image}
                                    alt={char.name}
                                />
                            </section>
                           <section className="flex items-center">
                             <h3>{char.name}</h3>
                           </section>
                       </article>
                    ))
                }
            </section>
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
