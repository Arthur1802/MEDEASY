import BackBtn from '../../components/BackBtn/BackBtn'
import logo from '../../assets/logos/logo_light.png'
import './Login.css'

const Login = () => {
    return (
        <div className = "auth-panel" data-aos = "fade-up">
            <BackBtn />
            <img src = {logo} alt = "MedEasy Logo" className = "logo" />
            <form>
                <div className = "form-floating poppins-regular">
                    <input type = "email" className = "form-control" id = "floatingInput" placeholder = "name@example.com" />
                    <label htmlFor = "floatingInput">Email address</label>
                </div>
                <div className = "form-floating poppins-regular">
                    <input type = "password" className = "form-control" id = "floatingInput" placeholder = "Password" />
                    <i className = "fa-solid fa-eye-slash"></i>
                    <label htmlFor = "floatingInput">Password</label>
                </div>
                <a href = "/forgot-password" className = "forgot-password poppins-regular">Forgot Password?</a>
                <div className = "form-check poppins-regular">
                    <input type = "checkbox" className = "form-check-input" id = "rememberMe" />
                    <label htmlFor = "rememberMe">Remember Me</label>
                </div>
                <button className = "btn btn-primary poppins-medium" type = "submit">LogIn</button>
                <div className = "separator">
                    <span>OR</span>
                </div>
                <button className = "btn btn-secondary poppins-medium">
                    <i className = "btn-icons fa-brands fa-google"></i>
                    <span>Continue with Google</span>
                </button>
                <button className = "btn btn-secondary poppins-medium">
                    <i className = "btn-icons fa-brands fa-apple"></i>
                    <span>Continue with Apple</span>
                </button>
                <button className = "btn btn-secondary poppins-medium">
                    <i className = "btn-icons fa-brands fa-microsoft"></i>
                    <span>Continue with Microsoft</span>
                </button>
            </form>
        </div>
    )
}

export default Login