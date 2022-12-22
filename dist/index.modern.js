import React from 'react';

function Modal({
  closeModal,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-button",
    onClick: closeModal
  }, "X"), /*#__PURE__*/React.createElement("p", {
    className: "modal-text"
  }, " ", text, " ")));
}

export default Modal;
//# sourceMappingURL=index.modern.js.map
