import { useState } from "react";
import { ADD_ITEM, useList, useListActions } from "../providers/ListProvider";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import "./Navbar.scss";

function Navbar() {
  const list = useList();
  const dispatchList = useListActions();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const addNewTodo = (event, title, description) => {
    event.preventDefault();
    dispatchList({
      type: ADD_ITEM,
      payload: { id: list.length, title, description, completed: false },
    });
    setModalIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar-lefHand">taskin</div>
        <div className="navbar-rightHand">
          <button type="button" onClick={() => setModalIsOpen(true)}>
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
