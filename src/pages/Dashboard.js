import { useEffect } from "react"
import axios from 'axios'


export const Dashboard = () => {

    const fecthData = async() => {
        try {
          const { data: { info, results }} = await axios.get("https://rickandmortyapi.com/api/character/?page=1")
          console.log(info)
          console.log(results)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fecthData()
    },[])


    return (
        <div>Dashboard</div>
    )
}
