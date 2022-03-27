import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//actions creator
import { getCharacter } from '../actions'
import { useEffect } from 'react'
//components
import { CharacterDetail } from '../components/CharacterDetail'


export const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const character = useSelector(state => state.character)


  useEffect(() => {
    if(id) dispatch(getCharacter(`https://rickandmortyapi.com/api/character/${id}`))
  },[id])

  return (
    <main className='flex justify-center mt-10 p-5'>
      {
        character && <CharacterDetail paramId={ id } character={character} />

      }
    </main>
  )
}
