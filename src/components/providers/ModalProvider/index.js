import { createContext, useContext, useReducer } from "react";

const initialState = {
  show: false,
  title: "",
  children: null,
  onclose: null,
};

const ModalContext = createContext();
const ModalContextActions = createContext();
const reducer = (state, action) => {
  return state;
};

const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalContext.Provider value={modalState}>
      <ModalContextActions.Provider value={dispatch}>
        {children}
      </ModalContextActions.Provider>
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export const useModalContext = () => useContext(ModalContext);
export const useModalActions = () => useContext(ModalContextActions);
