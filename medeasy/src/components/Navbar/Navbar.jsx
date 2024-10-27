import { isLoggedIn } from '../../utils/auth'
import logo from '../../assets/logos/logo_light.png'
import ThemeToggler from '../ThemeToggler/ThemeToggler'
import PropTypes from 'prop-types'
import HamburgerMenuButton from '../HamburgerMenuButton/HamburgerMenuButton.jsx'
import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ theme, setTheme }) => {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show);
    }

    const isUserLoggedIn = !isLoggedIn()

    return (
        <nav className = "navbar-container">
            {isUserLoggedIn ? (
                <>
                    <div className = "sections">
                        <img src = {logo} alt = "MedEasy Logo" />
                        <div className = "menu-btn" onClick = {toggleMenu}>
                            <HamburgerMenuButton />
                        </div>
                    </div>
                    <div className = "sections">
                        <ul className = "poppins-regular">
                            <li><a href = "/index"><i className = "fa-solid fa-house"></i>Home</a></li>
                            <li><a href = "/appointments"><i className = "fa-solid fa-calendar"></i>My appointments</a></li>
                            <li><a href = "/profile"><i className = "fa-solid fa-user"></i>Profile</a></li>
                            <li><a href = "/contact"><i className = ""></i>Contact</a></li>
                            <li><a href = "/logout"><i className = "fa-solid fa-right-from-bracket"></i>Log Out</a></li>
                        </ul>
                        <ThemeToggler
                            isChecked = {theme}
                            handleChange = {() => setTheme(!theme)}
                        />
                    </div>
                </>
            ) : (
                <>
                    <ThemeToggler
                        isChecked = {theme}
                        handleChange = {() => setTheme(!theme)}
                    />
                </>
            )}
        </nav>
    )
}

Navbar.propTypes = {
    theme: PropTypes.bool.isRequired,
    setTheme: PropTypes.func.isRequired,
}

export default Navbar