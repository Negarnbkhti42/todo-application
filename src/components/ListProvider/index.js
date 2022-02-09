import { createContext, useContext, useState } from "react";
import { list } from "../work_list";

const ListContext = createContext();
const ListActions = createContext();

const ListProvider = ({children}) => {
    const [todoList, setTodoList] = useState(list);

    return (
        <ListContext.Provider value={todoList}>
            <ListActions.Provider value={setTodoList}>
                {children}
            </ListActions.Provider>
        </ListContext.Provider>
    )
}

export default ListProvider;

export const useList = () => useContext(ListContext);

export const useListActions = () => {
    const setList = useContext(ListActions);

    return {
        addToList: newItem => {
            setList(prevList => ({
                ...prevList,
                newItem
            }))
        },

        removFromList: id => {
            setList(prevList => prevList.filter(item => item.id !== id))
        }
    }
};