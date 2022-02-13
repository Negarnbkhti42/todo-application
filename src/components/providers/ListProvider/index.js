import { createContext, useContext, useReducer } from "react";
import { list } from "../../work_list";

const ListContext = createContext();
const ListContextDispatcher = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "addItem":
            return [...state, action.payload];

        case "removeItem":
            return state.filter((item) => item.id !== action.payload);

        case "toggleItem":
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed }
                    : item
            );

        case "updateItem":
            return state.map((item) =>
                item.id === action.payload.id ? { ...item, ...action.payload } : item
            );

        default:
            return state;
    }
};

const ListProvider = ({ children }) => {
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