import React, { useState } from 'react'

import Modal from 'react-modal-component-library'
import 'react-modal-component-library/dist/index.css'

const App = () => {
  const [modalVisible, setModalVisible] = useState(true)

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <div>
      {modalVisible && (
        <Modal text='Employee Created !' closeModal={closeModal} />
      )}
    </div>
  )
}

export default App
