import propTypes from "prop-types";
import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import "./Modal.scss";

const Modal = ({ title, children, open, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return (
    <div className="modal" hidden={!isOpen}>
      <div className="modal_container">
        <header className="modal_header">
          <button onClick={handleClose} className="modal_button-return">
            <FiArrowLeft />
          </button>
          {title}
        </header>
        <div className="modal_main">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  open: propTypes.bool.isRequired,
  onClose: propTypes.func,
};

Modal.defaultProps = {
  title: "",
  onClose: null,
};
