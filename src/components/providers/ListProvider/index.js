import { createContext, useContext, useReducer } from "react";
import { list } from "../../work_list";

const ListContext = createContext();
const ListContextDispatcher = createContext();

export const ADD_ITEM = 'addItem';
export const REMOVE_ITEM = 'removeItem';
export const TOGGLE_ITEM = 'toggleItem';
export const UPDATE_ITEM = 'updateItem';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];

        case REMOVE_ITEM:
            return state.filter((item) => item.id !== action.payload);

        case TOGGLE_ITEM:
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed }
                    : item
            );

        case UPDATE_ITEM:
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );

        default:
            return state;
    }
};

function ListProvider({ children }) {
    const [todoList, dispatch] = useReducer(reducer, list)

    return (
        <ListContext.Provider value={todoList}>
            <ListContextDispatcher.Provider value={dispatch}>
                {children}
            </ListContextDispatcher.Provider>
        </ListContext.Provider>
    )
}

export default ListProvider;

export const useList = () => useContext(ListContext);

export const useListActions = () => {
    return useContext(ListContextDispatcher);
};