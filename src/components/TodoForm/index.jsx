import propTypes from "prop-types";

import "./TodoForm.scss";
import { useState } from "react";

function TodoForm({ title, description, onSubmit }) {
  const [titleInput, setTitleInput] = useState(title);
  const [descriptionInput, setDescriptionInput] = useState(description);

  return (
    <form
      onSubmit={(e) => onSubmit(e, titleInput, descriptionInput)}
      className="todoform"
    >
      <div className="todoform_title">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
      </div>
      <div className="todoform_description">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
      </div>
      <div className="todoform_footer">
        <button type="submit">done</button>
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
