import { NavLink, Link } from 'react-router-dom'
import {
    HomeIcon,
    HeartIcon,
    CollectionIcon,
} from '@heroicons/react/outline'

export const Header = () => {

    return (
        <section className='p-4 h-32 flex flex-col shadow-lg justify-between bg-green-400 sm:flex-row'>
            <header className='text-2xl text-center sm:flex items-center hover:animate-pulse' >
                <Link to="/">RickAndMorty</Link>
            </header>

            <nav className='h-2/3 items-center sm:h-full sm:w-96' >
                <ul
                    className='flex items-center justify-between h-full text-lg'
                >
                    <li className='group' >
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-50" : "text-black"}
                            to="/"> <HomeIcon  className='w-11 h-11 group-hover:animate-bounce' />
                        </NavLink>
                    </li>

                    <li className='group' >
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-50" : "text-black"}
                            to="/categories"> <CollectionIcon className='w-11 h-11 group-hover:animate-bounce' />
                        </NavLink>
                    </li>
                    <li className='group' >
                        <NavLink
                            className= {({isActive}) => isActive ? "text-green-50" : "text-black"}
                            to="/favorites"> <HeartIcon className='w-11 h-11 group-hover:animate-bounce' />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
