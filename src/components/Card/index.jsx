import PropTypes from "prop-types";
import "./Card.scss";

import { FiTrash2, FiCheckCircle, FiXCircle, FiEdit } from "react-icons/fi";
import propTypes from "prop-types";

const Card = ({
  title,
  description,
  className,
  completed,
  onDelete,
  onComplete,
  onEdit,
}) => {
  return (
    <div className={`card_container ${className}`}>
      <header className="card_header">
        <h3>{title}</h3>
      </header>
      <div className="card_main">
        <div className="card_description">{description}</div>
        <div className="card_footer">
          <div>
            <button
              className="card_button card_button-delete"
              onClick={onDelete}
            >
              <FiTrash2 />
            </button>
          </div>
          <div>
            <button className="card_button card_button-edit" onClick={onEdit}>
              <FiEdit />
            </button>
            <button
              className="card_button card_button-complete"
              onClick={onComplete}
            >
              {completed ? <FiXCircle /> : <FiCheckCircle />}
            </button>
          </div>
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
  onEdit: propTypes.func,
};

Card.defaultProps = {
  title: "",
  description: "",
  completed: false,
  onDelete: null,
  onComplete: null,
  onEdit: null,
};
