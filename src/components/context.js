import React, { useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    LowerCase: false,
    UpperCase: false,
    Number: false,
    Symbols: false,
    length: 6,
    hashPassword: "",
    clipboard: null,
    error: { show: null, msg: "" },
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (input) => {
    dispatch({ type: "INPUT_CHEAKBOX", payload: input });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  const Clipboard = () => {
    dispatch({ type: "COPYBOARD" });
  };

  const removeAlert = () => {
    dispatch({ type: "REMOVE_ALERT" });
  };

  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000);
    return () => clearTimeout(timeout); // cleanup function
  }, [state.clipboard, state.error]); // dependency list

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleSubmit,
        handleInput,
        Clipboard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { useGlobalContext, AppProvider };
