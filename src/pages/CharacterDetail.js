import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid} from '@heroicons/react/solid'
//actions creator
import { getCharacter, addCharacterToFavorites, removeCharacterFromFavorites } from '../actions'
import { useEffect } from 'react'
import { useState } from 'react'


export const CharacterDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const character = useSelector(state => state.character)
  const favorites = useSelector(state => state.favorites)
  const [isFav, setIsFav] = useState(favorites.map(fav => fav.id).includes(parseInt(id)))

  const handleFavorite = () => {
    setIsFav(!isFav)
    if(!isFav) {
      dispatch(addCharacterToFavorites(character))
      return
    }
    dispatch(removeCharacterFromFavorites(character.id))
  }


  useEffect(() => {
    if(id) dispatch(getCharacter(`https://rickandmortyapi.com/api/character/${id}`))
  },[id])

  return (
    <main className='flex justify-center mt-10 p-5'>
      {
        character &&
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
      }
    </main>
  )
}
