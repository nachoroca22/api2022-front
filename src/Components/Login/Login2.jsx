import React from 'react'
import './modal.css'

const Modal = ({}) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpenModal && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h1>hola</h1> 
                <button onClick={closeModal}>
                    Close Modal
                </button>


            </div>
        </div>
    )
}

export default Modal