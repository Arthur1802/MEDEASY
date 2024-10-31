import { toast, Slide } from 'react-toastify'

export const Notify = (type, message, autoClose = 5000, hideProgressBar = false) => {
    toast[type](message, {
        position: "top-center",
        autoClose: autoClose,
        hideProgressBar: hideProgressBar,
        closeOnClick: false,
        draggable: true,
        progress: undefined,
        transition: Slide
    })
}