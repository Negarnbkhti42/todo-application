import PropTypes from "prop-types";
import "./Card.scss";

import { FiTrash2, FiCheck, FiEdit } from "react-icons/fi";
import propTypes from "prop-types";

function Card({
  title,
  description,
  className,
  completed,
  createDate,
  editDate,
  onDelete,
  onComplete,
  onEdit,
  isDark,
}) {
  return (
    <div
      className={`card_container ${className}`}
      data-theme={isDark ? "dark" : "light"}
    >
      <header
        className={`card_header ${completed ? "card_header-completed" : ""}`}
      >
        <h3>{title}</h3>
        <span onClick={onComplete} className="card_checkbox">
          <FiCheck />
        </span>
      </header>
      <div className="card_main">
        <div className="card_description">
          {description.split("\n").map((p, i) => (
            <span key={i}>
              {p} <br />
            </span>
          ))}
        </div>
        <div className="card_date">
          created at: {createDate} <br />
          last edited: {editDate}
        </div>
      </div>
      <div className="card_footer">
        <div>
          <button
            className={`card_button ${
              isDark ? "card_button-dark" : ""
            } card_button-delete`}
            onClick={onDelete}
          >
            <FiTrash2 />
          </button>
        </div>
        <div>
          <button
            className={`card_button ${
              isDark ? "card_button-dark" : ""
            } card_button-edit`}
            onClick={onEdit}
          >
            <FiEdit />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
  onComplete: PropTypes.func,
  onEdit: propTypes.func,
  isDark: propTypes.bool,
};

Card.defaultProps = {
  title: "",
  description: "",
  completed: false,
  onDelete: null,
  onComplete: null,
  onEdit: null,
  isDark: false,
};
