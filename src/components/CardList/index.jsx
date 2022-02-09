import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";

const CardList = ({ list, className }) => {
  return (
    <div className={`list-container ${className}`}>
      {list.map((item) => (
        <Card key={item.id} className="list_card" {...item} />
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  list: propTypes.shape([]),
  className: propTypes.string,
};

CardList.defaultProps = {
  list: [],
  className: "",
};
