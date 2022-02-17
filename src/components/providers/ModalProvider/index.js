import { createContext, useContext, useReducer } from "react";

const initialState = {
  show: false,
  title: "",
};

const ModalContext = createContext();
const ModalActionDispatcher = createContext();

export const SET_TITLE = 'setTitle';
export const CLOSE_MODAL = 'closeModal';
export const OPEN_MODAL = 'openModal';
const reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload };
    case CLOSE_MODAL:
      return { ...state, show: false };
    case OPEN_MODAL:
      return { ...state, show: true };
    default:
      return state;
  }
};

function ModalProvider({ children }) {
  const [modalState, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={modalState}>
      <ModalActionDispatcher.Provider value={dispatch}>
        {children}
      </ModalActionDispatcher.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModal = () => useContext(ModalContext);
export const useModalActions = () => useContext(ModalActionDispatcher);
