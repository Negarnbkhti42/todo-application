import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";
import { useList, useListActions } from "../ListProvider";

const CardList = ({ className }) => {
  const todoList = useList();
  const dispatch = useListActions();

  return (
    <div className={`list-container ${className}`}>
      {todoList.map((item) => (
        <Card
          key={item.id}
          className="list_card"
          {...item}
          onDelete={() => dispatch({ type: "removeItem", payload: item.id })}
          onComplete={() => dispatch({ type: "toggleItem", payload: item.id })}
        />
      ))}
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  className: propTypes.string,
};

CardList.defaultProps = {
  className: "",
};
