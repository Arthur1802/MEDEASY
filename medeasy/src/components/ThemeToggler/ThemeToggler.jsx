import { useEffect, useRef } from 'react'
import './ThemeToggler.css'
import PropTypes from 'prop-types'

const ThemeToggler = ({ isChecked, handleChange }) => {
    const isDark = useRef(false)
    useEffect(() => {
        isDark.current = isChecked
    }, [isChecked])

    return (
        <div className = 'toggle-container'>
            <input
                type = 'checkbox'
                id = 'check'
                className = 'toggle'
                onChange = {handleChange}
                checked = {isChecked}
            />
            <label id = "label" htmlFor = "check"><i className = {`toggleIcon fa-solid fa-${isChecked ? "sun" : "moon"}`}></i></label>
        </div>
    )
}

ThemeToggler.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default ThemeToggler