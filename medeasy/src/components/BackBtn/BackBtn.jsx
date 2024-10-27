import './BackBtn.css'

const BackBtn = () => {
    const goBack = () => {
        window.history.back()
    }

    return (
        <div className = "back-btn">
            <button onClick = {() => goBack()}><i className = "fa-solid fa-arrow-left"></i></button>
        </div>
    )
}

export default BackBtn