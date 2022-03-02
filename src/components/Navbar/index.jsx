import { useState } from "react";
import { ADD_ITEM, useListActions } from "../providers/ListProvider";
import { FiMoon, FiSun } from "react-icons/fi";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import logo from "./coollogo_com-296642901.png";
import "./Navbar.scss";
import {
  TOGGLE_THEME,
  useTheme,
  useThemeActions,
} from "../providers/ThemeProvider";

function Navbar() {
  const dispatchList = useListActions();

  const { isLight } = useTheme();
  const dispatchTheme = useThemeActions();

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
    <nav className={`navbar ${isLight ? "" : "navbar-dark"}`}>
      <div className="navbar_container">
        <div className="navbar_leftHand">
          <img src={logo} alt="Taskin logo" />
        </div>
        <div className="navbar_rightHand">
          <button
            className={`navbar_button ${isLight ? "" : "navbar_button-dark"}`}
            type="button"
            onClick={() => setModalIsOpen(true)}
          >
            add todo +
          </button>
          <button
            className={`navbar_button ${
              isLight ? "" : "navbar_button-dark"
            } navbar_button-theme`}
            type="button"
            onClick={() => dispatchTheme({ type: TOGGLE_THEME })}
          >
            {isLight ? <FiMoon /> : <FiSun />}
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <Modal title="New task" onClose={() => setModalIsOpen(false)}>
          <TodoForm onSubmit={addNewTodo} />
        </Modal>
      )}
    </nav>
  );
}

export default Navbar;
