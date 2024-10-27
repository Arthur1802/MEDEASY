import Navbar from '../components/Navbar/Navbar'
import useLocalStorage from 'use-local-storage'
import './index.css'

const Index = () => {
    const [theme, setTheme] = useLocalStorage('theme', false)

    return (
        <div className = "index-container" data-aos = "fade-up" data-theme = {theme ? 'dark' : 'light'}>
            <Navbar
                theme = {theme}
                setTheme = {setTheme}
            />
            <h1>INDEX</h1>
        </div>
    )
}

export default Index