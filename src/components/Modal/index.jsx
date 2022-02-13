import propTypes from "prop-types";
import { FiArrowLeft } from "react-icons/fi";
import {
  CLOSE_MODAL,
  useModal,
  useModalActions,
} from "../providers/ModalProvider";
import "./Modal.scss";

const Modal = ({ children, onClose }) => {
  const { show, title } = useModal();
  const dispatch = useModalActions();
  const handleClose = () => {
    dispatch({ type: CLOSE_MODAL });
    onClose && onClose();
  };

  return (
    <div className="modal" hidden={!show}>
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
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  onClose: propTypes.func,
};

Modal.defaultProps = {
  onClose: null,
};
