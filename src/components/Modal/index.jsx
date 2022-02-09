import propTypes from "prop-types";
import { FiArrowLeft } from "react-icons/fi";
import "./Modal.scss";

const Modal = ({ title, children, open }) => {
  return (
    <div className="modal">
      <header className="modal_header">
        <button className="modal_button-return">
          <FiArrowLeft />
        </button>
        {title}
      </header>
      <div className="modal_main">{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  title: propTypes.string,
  children: propTypes.oneOfType([propTypes.string, propTypes.node]).isRequired,
  open: propTypes.bool.isRequired,
};

Modal.defaultProps = {
  title: "",
};
