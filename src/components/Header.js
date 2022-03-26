import { NavLink, Link } from 'react-router-dom'

export const Header = () => {

    return (
        <section>
            <header>
                <Link to="/">RickAndMorty</Link>
            </header>

            <nav>
                <ul>
                    <li >
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-600" : "text-black"}
                            to="/">Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-600" : "text-black"}
                            to="/locations">Locations
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-600" : "text-black"}
                            to="/favorites">Favorites
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
