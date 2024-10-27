import AppRoutes from './AppRoutes'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        const handleStorageChange = () => {
            setTheme(localStorage.getItem('theme') || 'light');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <div className = "App" data-aos = "" data-theme = {theme}>
            <AppRoutes />
        </div>
    )
}

export default App