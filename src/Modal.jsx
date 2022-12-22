import React from 'react'

function Modal({ closeModal, text }) {
  return (
    <div className='modal'>
      <div className='modal-body'>
        <button className='modal-button' onClick={closeModal}>
          X
        </button>
        <p className='modal-text'> {text} </p>
      </div>
    </div>
  )
}

export default Modal
