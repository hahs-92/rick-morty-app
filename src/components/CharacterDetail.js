import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid} from '@heroicons/react/solid'
//actions creator
import { addCharacterToFavorites, removeCharacterFromFavorites } from '../actions'

export const CharacterDetail = ({paramId, character}) => {
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites)
    const [isFav, setIsFav] = useState(favorites.map(fav => fav.id).includes(parseInt(paramId)))

    const handleFavorite = () => {
        setIsFav(!isFav)
        if(!isFav) {
          dispatch(addCharacterToFavorites(character))
          return
        }
        dispatch(removeCharacterFromFavorites(character.id))
      }

    return (
        <article className='relative max-w-3xl shadow-lg sm:flex gap-3'>
          <section
            className='absolute h-8 w-8 right-1 top-1 cursor-pointer text-green-400'
            onClick={ handleFavorite }
          >
            {
              isFav ? <HeartIconSolid /> :  <HeartIcon />
            }
          </section>

          <section>
            <img
              src={character.image}
              alt={character.name}
              className='w-full'
            />
          </section>

          <section className='mt-3 p-3 text-lg'>
            <h3> <span className='font-bold'>Id: </span>{character.id}</h3>
            <h3> <span className='font-bold'>Nombre: </span>{character.name}</h3>
            <h3> <span className='font-bold'>Gender: </span>{character.gender}</h3>
            <h3> <span className='font-bold'>Status: </span>{character.status}</h3>
            <h3> <span className='font-bold'>Origin: </span>{character.origin.name}</h3>
            <h3> <span className='font-bold'>Location: </span>{character.location.name}</h3>
            <h3> <span className='font-bold'>Specie: </span>{character.species}</h3>
            <h3> <span className='font-bold'>Created: </span>{character.created}</h3>
          </section>
        </article>
    )
}
