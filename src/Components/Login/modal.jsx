import React from "react";

export default function Modal({isOpen}) {

    return(
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <h1> Modlal</h1>
        </div>
    )
}