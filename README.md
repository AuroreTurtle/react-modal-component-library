# react-modal-component-library

> Library of a React Modal Component for HealthWealth (OC project 14)

This component displays a modal with a message in the center of the screen.

[![NPM](https://img.shields.io/npm/v/react-modal-component-library.svg)](https://www.npmjs.com/package/react-modal-component-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install
The package can be installed via npm :

```bash
npm install --save react-modal-component-library
```

## Usage

The Modal component needs two props :
* {text} : the text to display in the modal
* {closeModal} : the function to close the modal (you have to add it closing function in your file)

Example :

```jsx
import React, { useState } from 'react'
import Modal from 'react-modal-component-library'
import 'react-modal-component-library/dist/index.css'

function Example () {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
      <div> 
        <button onClick={openModal}> Open Modal </button>
        {modalVisible && <Modal text="Employee Created !" closeModal={closeModal} />}
      </div>
    )
}
```
