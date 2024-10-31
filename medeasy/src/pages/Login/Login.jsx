import BackBtn from '../../components/BackBtn/BackBtn'
import logo from '../../assets/logos/logo_light.png'
import { useEffect, useState } from 'react'
import { LoginWithEmail, LoginWithGoogle } from '../../utils/auth'
import { Notify } from '../../components/Notifications/Notify'
import './Login.css'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => setShowPassword(prev => !prev)

    const [notifications, setNotifications] = useState({
        success: "",
        error: "",
        warning: ""
    })

    const [isLoading, setIsLoading] = useState({
        email: false,
        google: false
    })

    const handleInputChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleLoginWithEmail = async (e) => {
        e.preventDefault()
        console.log('LoginWithEmail clicked')

        if (!user.email || !user.password) {
            setNotifications(prev => ({ ...prev, error: "Please fill in all fields" }))
            return
        }

        if (!isLoading.email) {
            console.log('LoginWithEmail not loading')

            setIsLoading(prev => ({...prev, email: true}))

            const result = await LoginWithEmail(user.email, user.password)
            
            const [resultType, resultMessage] = Object.entries(result)[0]
            
            setNotifications(prev => ({ ...prev, [resultType]: resultMessage }))
            
            if (isLoading.email) {
                setIsLoading(prev => ({ ...prev, email: false }))
            }
        }
    }

    const handleLoginWithGoogle = async (e) => {
        e.preventDefault()
        console.log('LoginWithGoogle clicked')
    
        if (!isLoading.google) {
            console.log('LoginWithGoogle not loading')
            setIsLoading(prev => ({...prev, google: true }))
    
            try {
                const result = await LoginWithGoogle()
                const [resultType, resultMessage] = Object.entries(result)[0]
    
                if (resultMessage) {
                    setNotifications(prev => ({ ...prev, [resultType]: resultMessage }))
                }
            } catch (error) {
                console.error("Error during Google login:", error)
                setNotifications(prev => ({ ...prev, error: "Google login failed. Please try again." }))
            } finally {
                if (isLoading.google) {
                    setIsLoading(prev => ({ ...prev, google: false }))
                }
            }
        }
    }
    

    useEffect(() => {
        const [type, message] = Object.entries(notifications)[0]

        if (message) {
            const autoClose = type === 'error' ? false : 5000
            const hideProgressBar = type === 'error'
            const redirect = type === 'success' && message === 'You have successfully logged in'
        
            Notify(type, message, autoClose, hideProgressBar)

            if (redirect) {
                setTimeout(() => {
                    window.location.href = "/index"
                }, 5000)
            }
        }
    }, [notifications])

    return (
        <div className = "auth-panel" data-aos = "fade-up">
            <BackBtn />

            <img src = {logo} alt = "MedEasy Logo" className = "logo" />

            <form>
                <div className = "form-floating poppins-regular">
                    <input
                        type = "email"
                        className = "form-control"
                        id = "floatingInputEmail"
                        name = "email"
                        placeholder = "name@example.com"
                        value = {user.email}
                        onChange = {handleInputChange}
                    />
                    <label htmlFor = "floatingInputEmail">Email address</label>
                </div>
                <div className = "form-floating poppins-regular">
                    <input
                        type = {showPassword ? "text" : "password"}
                        className = "form-control"
                        id = "floatingInputPassword"
                        name = "password"
                        placeholder = "Password"
                        value = {user.password}
                        onChange = {handleInputChange}
                    />
                    <i 
                        className = {showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"} 
                        onClick = {handleShowPassword}
                    ></i>
                    <label htmlFor = "floatingInputPassword">Password</label>
                </div>
                <a href = "/forgot-password" className = "forgot-password poppins-regular">Forgot Password?</a>
                <div className = "form-check poppins-regular">
                    <input type = "checkbox" className = "form-check-input" id = "rememberMe" />
                    <label htmlFor = "rememberMe">Remember Me</label>
                </div>
                <button
                    type = "button"
                    onClick = {handleLoginWithEmail}
                    className = "btn btn-primary poppins-medium"
                >
                    {isLoading.email ? (<>Logging in...</>) : (<>Log In</>)}
                </button>
                <div className = "separator">
                    <span>OR</span>
                </div>
                <button
                    type = "button"
                    onClick = {handleLoginWithGoogle}
                    className = "btn btn-secondary poppins-medium"
                >
                    {isLoading.google ? (<>Logging in...</>) : (
                        <>
                            <i className = "btn-icons fa-brands fa-google"></i>
                            <span>Continue with Google</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    )
}

export default Login