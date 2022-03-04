import propTypes from "prop-types";

import "./TodoForm.scss";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../providers/ThemeProvider";

function TodoForm({ title, description, onSubmit }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const ref = useRef();

  const { isLight } = useTheme();

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <form
      onSubmit={(e) => onSubmit(e, titleInput, descriptionInput)}
      className={`todoform ${isLight || "todoform-dark"}`}
    >
      <div className="todoform_title">
        <label htmlFor="title">Title:</label>
        <input
          className="todoform_input"
          id="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
          ref={ref}
          required
        />
      </div>
      <div className="todoform_description">
        <label htmlFor="description">Description:</label>
        <textarea
          className="todoform_text"
          id="description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div className="todoform_footer">
        <button
          className={`todoform_button ${isLight || "todoform_button-dark"}`}
          type="submit"
        >
          done
        </button>
      </div>
    </form>
  );
}

export default TodoForm;

TodoForm.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  onSubmit: propTypes.func.isRequired,
};

TodoForm.defaultProps = {
  title: "",
  description: "",
};
