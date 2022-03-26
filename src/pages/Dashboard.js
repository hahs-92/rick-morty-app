import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
//actions creator
import { getCharacters } from '../actions'
//components
import { Character } from '../components/Character'


export const Dashboard = () => {
    const dispatch = useDispatch()
    const characters = useSelector(state => state.characters)

    const fecthData = () => {
        dispatch(getCharacters("https://rickandmortyapi.com/api/character/?page=1"))
    }

    useEffect(() => {
        fecthData()
    },[])


    console.log(characters)
    return (
        <main className="mt-3">
            <div>Dashboard</div>

            <section>
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
