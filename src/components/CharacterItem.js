import { useNavigate } from "react-router-dom"


export const CharacterItem = ({
    id, name, image="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
}) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/character/${ id }`)
    }

    return (
        <article
            onClick={handleNavigate}
            className="flex h-16 gap-x-4  p-2 cursor-pointer shadow-xl "
        >
            <section>
                <img
                    className="w-full h-full object-cover rounded-full"
                    src={image}
                    alt={name}
                />
            </section>
            <section className="flex items-center">
                <h3>{name}</h3>
            </section>
        </article>
    )
}
