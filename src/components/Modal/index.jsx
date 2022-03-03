import propTypes from "prop-types";
import { FiArrowLeft } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";
import "./Modal.scss";

function Modal({ title, children, onClose }) {
  const { isLight } = useTheme();

  return (
    <div className={`modal ${isLight ? "" : "modal-dark"}`}>
      <div className="modal_container">
        <header className="modal_header">
          <button onClick={onClose} className="modal_button-return">
            <FiArrowLeft />
          </button>
          {title}
        </header>
        <div className="modal_main">{children}</div>
      </div>
    </div>
  );
}

export default Modal;

Modal.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  onClose: propTypes.func,
};

Modal.defaultProps = {
  title: "",
  onClose: null,
};
