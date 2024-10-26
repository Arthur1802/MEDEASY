import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Welcome />} />
                <Route path = "/login" element = {<Login />} />
                <Route path = "/signin" element = {<Signin />} />
                <Route path = "/index" element = {<ProtectedRoute><Index /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes