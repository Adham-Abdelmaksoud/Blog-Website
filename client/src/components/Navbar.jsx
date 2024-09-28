import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar min-h-20 px-20">
            <h1 className="basis-1/3 font-bold">
                Blog Website
            </h1>

            <ul className="basis-2/3 flex flex-row justify-end space-x-14">
                <li>
                    <Link className='navlink' to="/">Blogs</Link>
                </li>
                <li>
                    <Link className='navlink' to="/about">About</Link>                
                </li>
                <li>
                    <Link className='navlink' to="/create-blog">New Blog</Link>
                </li>
            </ul>
        </nav>
    );
}
 
export default Navbar;