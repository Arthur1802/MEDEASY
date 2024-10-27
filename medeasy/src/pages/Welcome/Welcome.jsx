import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logos/logo_light.png'
import './Welcome.css'

const Welcome = () => {
    const navigate = useNavigate()

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignin = () => {
        navigate('/signin')
    }

    return (
        <div className = "welcome-container" data-aos = "fade-up">
            <img src = {logo} className = "logo" alt = "MedEasy Logo" />
            <h1 className = "poppins-medium">Welcome to MedEasy</h1>
            <div className = "btn-container">
                <button className = "poppins-regular" onClick = {() => goToLogin()}>Login</button>
                <button className = "poppins-regular" onClick = {() => goToSignin()}>Sign Up</button>
            </div>
        </div>
    )
}

export default Welcome