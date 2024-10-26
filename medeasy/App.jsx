import { AppRoutes } from './AppRoutes'
import { useState } from 'react'
import './App.css'

const App = () => {
    const [theme, setTheme] = useState(false)

    return (
        <div className = "App" data-aos = "fade-up" data-theme = {theme ? "dark" : "light"}>
            <label>Theme Toggler</label><input type = "checkbox" onClick = {() => setTheme(!theme)}/>
            <AppRoutes />
        </div>
    )
}

export default App