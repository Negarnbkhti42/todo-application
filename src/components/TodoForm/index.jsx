import propTypes from "prop-types";

import "./TodoForm.scss";
import {
  CHANGE_DESCRIPTION,
  CHANGE_TITLE,
  useForm,
  useFormActions,
} from "../providers/FormProvider";

function TodoForm({ onSubmit }) {
  const content = useForm();
  const dispatch = useFormActions();
  return (
    <form onSubmit={(e) => onSubmit(e)} className="todoform">
      <div className="todoform_title">
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={content.title}
          onChange={(e) =>
            dispatch({ type: CHANGE_TITLE, payload: e.target.value })
          }
        />
      </div>
      <div className="todoform_description">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={content.description}
          onChange={(e) =>
            dispatch({
              type: CHANGE_DESCRIPTION,
              payload: e.target.value,
            })
          }
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
  completed: propTypes.bool,
  onSubmit: propTypes.func,
  onCancel: propTypes.func,
};

TodoForm.defaultProps = {
  title: "",
  description: "",
  completed: false,
  onSubmit: null,
  onCancel: null,
};
