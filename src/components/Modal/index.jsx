import propTypes from "prop-types";
import { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useTheme } from "../providers/ThemeProvider";
import "./Modal.scss";

function Modal({ title, children, onClose }) {
  const { isLight } = useTheme();

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";

    return () => (document.documentElement.style.overflowY = null);
  }, []);

  return (
    <div className={`modal ${isLight ? "" : "modal-dark"}`}>
      <div className="modal_container">
        <header className="modal_header">
          <button
            onClick={onClose}
            className={`modal_button-return ${
              isLight ? "" : "modal_button-return-dark"
            }`}
          >
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
