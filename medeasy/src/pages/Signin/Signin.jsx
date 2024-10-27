import logo from '../../assets/logos/logo_light.png'
import BackBtn from '../../components/BackBtn/BackBtn'
import './Signin.css'

const Signin = () => {
    return (
        <div className = "auth-panel" data-aos = "fade-up">
            <BackBtn />
            <img src = {logo} alt = "MedEasy Logo" className = "logo" />
            <form>
                <div className = "form-floating poppins-regular">
                    <input type = "text" className = "form-control" id = "floatingInput" placeholder = "John Doe" />
                    <label htmlFor = "floatingInput">Name</label>
                </div>
                <div className = "form-floating poppins-regular">
                    <input type = "email" className = "form-control" id = "floatingInput" placeholder = "john.doe@example.com" />
                    <label htmlFor = "floatingInput">Email address</label>
                </div>
                <div className = "form-floating poppins-regular">
                    <input type = "password" className = "form-control" id = "floatingInput" placeholder = "Password" />
                    <i className = "fa-solid fa-eye-slash"></i>
                    <label htmlFor = "floatingInput">Password</label>
                </div>
                <div className = "form-floating poppins-regular">
                    <input type = "password" className = "form-control" id = "floatingInput" placeholder = "Repeat your password" />
                    <i className = "fa-solid fa-eye-slash"></i>
                    <label htmlFor = "floatingInput">Confirm password</label>
                </div>
                <button className = "btn btn-primary poppins-medium" type = "submit">Signin</button>
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

export default Signin