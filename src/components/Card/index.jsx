import PropTypes from "prop-types";

const Card = ({ title, description, completed, onDelete }) => {
  return (
    <div>
      <header className="card_header">
        <h3>{title}</h3>
      </header>
      <div className="card_main">
        <div>{description}</div>
        <div className="card_footer">
          <button>delete</button>
          <button>{completed ? "un-complete" : "complete"}</button>
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
  onDelete: PropTypes.func.isRequired,
};

Card.defaultProps = {
  title: "",
  description: "",
  completed: false,
  onDelete: null,
};
