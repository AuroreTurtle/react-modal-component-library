function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function Modal(_ref) {
  var closeModal = _ref.closeModal,
    text = _ref.text;
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

module.exports = Modal;
//# sourceMappingURL=index.js.map
