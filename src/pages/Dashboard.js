import { useEffect } from "react"
import axios from 'axios'
import { useState } from "react"
//components
import { Character } from '../components/Character'


export const Dashboard = () => {
    const [ data, setData] = useState([])

    const fecthData = async() => {
        try {
          const { data: { info, results }} = await axios.get("https://rickandmortyapi.com/api/character/?page=1")
          console.log(info)
          console.log(results)
          setData(results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fecthData()
    },[])


    return (
        <main>
            <div>Dashboard</div>

            <section>
                {
                    data && data.map(char => (
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
