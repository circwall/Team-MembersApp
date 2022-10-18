import {Link} from 'react-router-dom';

const Nav = () =>{


    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light' >
            <ul className='navbar-nav mc-auto mb-2 mb-lg'>
                <li>
                    <Link className='nav-link' to ='/'>Home</Link>
                </li>
                <li>
                    <Link className='nav-link' to ='/GroupedTeamMembers'>Teams</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav 