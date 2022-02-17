import { SET_IS_ADDING, useFormActions } from "../providers/FormProvider";
import {
  OPEN_MODAL,
  SET_TITLE,
  useModalActions,
} from "../providers/ModalProvider";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useModalActions();
  const formDispatch = useFormActions();

  const handleClick = () => {
    formDispatch({ type: SET_IS_ADDING, payload: true });
    dispatch({ type: SET_TITLE, payload: "New todo" });
    dispatch({ type: OPEN_MODAL });
  };
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar-lefHand">taskin</div>
        <div className="navbar-rightHand">
          <button type="button" onClick={handleClick}>
            add todo +
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
