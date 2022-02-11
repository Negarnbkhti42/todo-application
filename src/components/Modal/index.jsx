import propTypes from "prop-types";
import { FiArrowLeft } from "react-icons/fi";
import "./Modal.scss";

const Modal = ({ title, children, open, onClose }) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className="modal" hidden={!open}>
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
