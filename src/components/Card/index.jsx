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
