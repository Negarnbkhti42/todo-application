import { createContext, useContext, useReducer } from "react"

export const FormContext = createContext();
export const FormActionsContext = createContext();

const initialForm = {
    title: '',
    description: '',
    completed: false
};

export const CHANGE_TITLE = "changeTitle";
export const CHANGE_DESCRIPTION = "changeDescription";
export const TOGGLE_COMPLETED = 'toggleCompleted';
export const CHANGE_COMPLETED = 'changeCompleted';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return { ...state, title: action.payload };
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload };
        case TOGGLE_COMPLETED:
            return { ...state, completed: !state.completed };
        case CHANGE_COMPLETED:
            return { ...state, completed: action.payload };
        default:
            return state;
    }
};

const FormProvider = ({ children }) => {
    const [form, dispatch] = useReducer(reducer, initialForm);

    return (
        <FormContext.Provider value={form}>
            <FormActionsContext.Provider value={dispatch}>
                {children}
            </FormActionsContext.Provider>
        </FormContext.Provider>
    )
}

export default FormProvider;

export const useForm = () => useContext(FormContext);
export const useFormDispatcher = () => useContext(FormActionsContext);