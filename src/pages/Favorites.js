import { useSelector } from "react-redux"
//components
import { ListCharacters } from "../components/ListCharacters"
import { Character } from '../components/Character'

export const Favorites = () => {
  const favorites = useSelector(state => state.favorites)

  return (
    <main className="mt-3 p-3">
      <ListCharacters>
        { !favorites.length && <h2>No tienes ningun Favorito!</h2>}
        {
          favorites
            && favorites.map(fav => (
              <Character
                key={fav.id}
                id={fav.id }
                name={fav.name}
                image={fav.image}
              />
            ))
        }
      </ListCharacters>

    </main>
  )
}
