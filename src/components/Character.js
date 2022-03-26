import { useNavigate } from 'react-router-dom'

export const Character = ({
    id, name, image="https://rickandmortyapi.com/api/character/avatar/19.jpeg"}
) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/character/${ id }`)
    }

    return (
        <article onClick={handleNavigate}>
            <section>
                <img src={ image } alt={ name } />
            </section>
            <section>
                <h3>{ name }</h3>
            </section>
        </article>
    )
}
