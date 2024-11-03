import { NavLink, Outlet } from "react-router-dom"
const NavBar = () => {
    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar