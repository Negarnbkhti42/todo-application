import Card from "../Card";
import propTypes from "prop-types";
import "./CardList.scss";
import { useList, useListActions } from "../providers/ListProvider";
import {
  CHANGE_DESCRIPTION,
  CHANGE_TITLE,
  SET_ID,
  SET_IS_ADDING,
  useFormActions,
} from "../providers/FormProvider";
import {
  OPEN_MODAL,
  SET_TITLE,
  useModalActions,
} from "../providers/ModalProvider";

const CardList = ({ className }) => {
  const todoList = useList();
  const dispatch = useListActions();
  const formDispatch = useFormActions();
  const modalDispatch = useModalActions();

  const handleEdit = (id) => {
    formDispatch({ type: SET_IS_ADDING, payload: false });
    formDispatch({
      type: SET_ID,
      payload: id,
    });
    formDispatch({
      type: CHANGE_TITLE,
      payload: todoList.find((item) => item.id === id).title,
    });
    formDispatch({
      type: CHANGE_DESCRIPTION,
      payload: todoList.find((item) => item.id === id).description,
    });

    modalDispatch({ type: SET_TITLE, payload: "edit todo" });
    modalDispatch({ type: OPEN_MODAL });
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
          onEdit={() => handleEdit(item.id)}
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
