import { useNavigate } from 'react-router-dom'

export const Character = ({
    id, name, specie, image="https://rickandmortyapi.com/api/character/avatar/19.jpeg"}
) => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/character/${ id }`)
    }

    return (
        <article
            onClick={handleNavigate}
            className='group relative rounded-md shadow-lg cursor-pointer transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50'
        >
            <section className='group-hover:blur-sm '>
                <img
                    src={ image }
                    alt={ name }
                    className='w-full sepia-0'
                />
            </section>
            <section className='invisible flex flex-col justify-center items-center group-hover:absolute inset-0 group-hover:visible'>
                <h3 className='text-2xl text-green-900'>{ name }</h3>
                <h3 className='text-xl text-green-800'>{ specie }</h3>
            </section>
        </article>
    )
}
