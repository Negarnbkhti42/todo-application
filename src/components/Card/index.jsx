import PropTypes from "prop-types";
import "./Card.scss";

import { FiTrash2, FiCheckCircle, FiXCircle, FiEdit } from "react-icons/fi";

const Card = ({
  title,
  description,
  className,
  completed,
  onDelete,
  onComplete,
}) => {
  return (
    <div className={`card_container ${className}`}>
      <header className="card_header">
        <h3>{title}</h3>
      </header>
      <div className="card_main">
        <div className="card_description">{description}</div>
        <div className="card_footer">
          <button onClick={onDelete}>
            <FiTrash2 />
          </button>
          <button>
            <FiEdit />
          </button>
          <button onClick={onComplete}>
            {completed ? <FiXCircle /> : <FiCheckCircle />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
};

Card.defaultProps = {
  title: "",
  description: "",
  completed: false,
  onDelete: null,
  onComplete: null,
};
