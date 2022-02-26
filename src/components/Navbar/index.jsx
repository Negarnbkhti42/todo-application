import { useState } from "react";
import { ADD_ITEM, useListActions } from "../providers/ListProvider";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import logo from "./coollogo_com-296642901.png";
import "./Navbar.scss";

function Navbar() {
  const dispatchList = useListActions();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addNewTodo = (event, title, description) => {
    event.preventDefault();
    dispatchList({
      type: ADD_ITEM,
      payload: { id: Date.now(), title, description, completed: false },
    });
    setModalIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_leftHand">
          <img src={logo} alt="Taskin logo" />
        </div>
        <div className="navbar_rightHand">
          <button
            className="navbar_button"
            type="button"
            onClick={() => setModalIsOpen(true)}
          >
            add todo +
          </button>
          {modalIsOpen && (
            <Modal title="New task" onClose={() => setModalIsOpen(false)}>
              <TodoForm onSubmit={addNewTodo} />
            </Modal>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
