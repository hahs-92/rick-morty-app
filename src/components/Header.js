import { NavLink, Link } from 'react-router-dom'

export const Header = () => {

    return (
        <section>
            <header>
                <Link to="/">RickAndMorty</Link>
            </header>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/locations">Locations</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
