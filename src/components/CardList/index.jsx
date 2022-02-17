import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";
import {
  UPDATE_ITEM,
  useList,
  useListActions,
} from "../providers/ListProvider";
import { useState } from "react";
import Modal from "../Modal";
import TodoForm from "../TodoForm";

function CardList({ className }) {
  const todoList = useList();
  const dispatch = useListActions();
  const [editingItem, setEditingItem] = useState();

  const handleSubmit = (e, title, description) => {
    e.preventDefault();

    dispatch({
      type: UPDATE_ITEM,
      payload: { id: editingItem.id, title, description },
    });

    setEditingItem(null);
  };

  const handleEdit = (item) => {
    console.log("I'm editing ", item);
    setEditingItem(item);
  };

  return (
    <div className={`list-container ${className}`}>
      {todoList.map((item) => (
        <Card
          key={item.id}
          className="list_card"
          {...item}
          onDelete={() => dispatch({ type: "removeItem", payload: item.id })}
          onComplete={() => dispatch({ type: "toggleItem", payload: item.id })}
          onEdit={() => handleEdit(item)}
        />
      ))}
      {editingItem && (
        <Modal title="Edit task" onClose={() => setEditingItem(null)}>
          <TodoForm
            title={editingItem.title}
            description={editingItem.description}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
}

export default CardList;

CardList.propTypes = {
  className: propTypes.string,
};

CardList.defaultProps = {
  className: "",
};
