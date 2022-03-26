import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//actions creator
import { getCharacter } from '../actions'
import { useEffect } from 'react'


export const CharacterDetail = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const character = useSelector(state => state.character)
  console.log(character)
  useEffect(() => {
    if(id) dispatch(getCharacter(`https://rickandmortyapi.com/api/character/${id}`))
  },[id])

  return (
    <main className='flex justify-center mt-10 p-5'>
      {
        character &&
        <article className='max-w-3xl shadow-lg sm:flex gap-3'>
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
