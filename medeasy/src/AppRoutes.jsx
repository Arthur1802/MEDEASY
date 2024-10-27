import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Welcome from './pages/Welcome/Welcome'
import Login from './pages/Login/Login'
import Signin from './pages/Signin/Signin'
import Index from './pages/Index'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Welcome />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/signin" element = {<Signin />} />
                <Route path = "/index" element = {<Index />} />
                {/* <Route path = "/index" element = {<ProtectedRoute><Index /></ProtectedRoute>} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes