import { useState, useEffect } from 'react'
import { toast, ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../../utils/auth'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (!isLoggedIn()) {
            toast.error('You need to be logged in to access this page!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Slide,
            })

            const timeoutId = setTimeout(() => setRedirect(true), 5000)

            return () => clearTimeout(timeoutId)
        }
    }, [])

    if (redirect) {
        return <Navigate to = "/" replace />
    }

    return (
        <>
            <ToastContainer
                position = "top-center"
                autoClose = {5000}
                hideProgressBar = {false}
                newestOnTop = {false}
                closeOnClick
                rtl = {false}
                pauseOnFocusLoss = {false}
                draggable
                pauseOnHover = {false}
                theme = "light"
                transition = {Slide}
            />
            {isLoggedIn() && children}
        </>
    )
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProtectedRoute