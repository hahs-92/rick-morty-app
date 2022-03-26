import { useParams } from 'react-router-dom'

export const CharacterDetail = () => {
  const { id } = useParams()

  return (
    <section>
        { id }
    </section>
  )
}
