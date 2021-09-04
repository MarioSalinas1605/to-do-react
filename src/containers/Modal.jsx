import ReactDOM from 'react-dom';
import '../assets/styles/Modal.css'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="modalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }