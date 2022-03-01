import { createContext, useContext, useEffect, useReducer } from "react";

const ThemeContext = createContext();
const ThemeContextDispatcher = createContext();

export const TOGGLE_THEME = "toggle_theme";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, isLight: !state.isLight };
        default:
            return state;
    }
}

function ThemeProvider({ children }) {

    const [theme, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("theme")) || { isLight: true });

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextDispatcher.Provider value={dispatch}>
                {children}
            </ThemeContextDispatcher.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);

export const useThemeActions = () => useContext(ThemeContextDispatcher);