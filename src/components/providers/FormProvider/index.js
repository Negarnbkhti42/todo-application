import { createContext, useContext, useReducer } from "react"

export const FormContext = createContext();
export const FormActionDispatcher = createContext();

const initialForm = {
    title: '',
    description: '',
    isAdding: true,
    id: null
};

export const CHANGE_TITLE = "changeTitle";
export const CHANGE_DESCRIPTION = "changeDescription";
export const CLEAR_FORM = 'clearForm';
export const SET_IS_ADDING = 'setIsAdding';
export const SET_ID = 'setId';

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return { ...state, title: action.payload };
        case CHANGE_DESCRIPTION:
            return { ...state, description: action.payload };
        case CLEAR_FORM:
            return initialForm;
        case SET_IS_ADDING:
            return { ...state, isAdding: action.payload };
        case SET_ID:
            return { ...state, id: action.payload };
        default:
            return state;
    }
};

const FormProvider = ({ children }) => {
    const [form, dispatch] = useReducer(reducer, initialForm);

    return (
        <FormContext.Provider value={form}>
            <FormActionDispatcher.Provider value={dispatch}>
                {children}
            </FormActionDispatcher.Provider>
        </FormContext.Provider>
    )
}

export default FormProvider;

export const useForm = () => useContext(FormContext);
export const useFormActions = () => useContext(FormActionDispatcher);