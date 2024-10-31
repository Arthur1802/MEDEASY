import AppRoutes from './AppRoutes'
import './App.css'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer
                position = "top-center"
                newestOnTop = {false}
                closeOnClick = {false}
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover
                theme = {theme}
            />
        </div>
    )
}

export default App