import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";
import { useList } from "../ListProvider";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      return [...state, action.payload];

    case "removeItem":
      return state.filter((item) => item.id !== action.payload);

    case "toggleItem":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );

    case "updateItem":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );

    default:
      return state;
  }
};

const CardList = ({ className }) => {
  // const list = useList();
  // const { removeFromList, toggleItem } = useListActions();
  const [todoList, dispatch] = useReducer(reducer, useList());

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
