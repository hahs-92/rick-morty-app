import { NavLink, Link } from 'react-router-dom'

export const Header = () => {

    return (
        <section className='p-2 h-24 flex flex-col justify-between bg-green-400 sm:flex-row'>
            <header className='text-2xl text-center sm:flex items-center' >
                <Link to="/">RickAndMorty</Link>
            </header>

            <nav className='h-2/3 items-center sm:h-full sm:w-96' >
                <ul
                    className='flex items-center justify-between h-full text-lg'
                >
                    <li >
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-100" : "text-black"}
                            to="/">Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-100" : "text-black"}
                            to="/locations">Locations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-100" : "text-black"}
                            to="/favorites">Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
