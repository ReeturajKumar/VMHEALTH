import { createContext, useReducer, useEffect } from "react";

// Helper function to safely parse JSON
const safeParse = (value) => {
  try {
    return value && value !== "undefined" ? JSON.parse(value) : null;
  } catch (e) {
    console.error("Failed to parse JSON:", e); // Log errors if JSON parsing fails
    return null; // Return null if parsing fails
  }
};

// Initial State
const initialState = {
  user: safeParse(localStorage.getItem("user")),
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};


// Create AuthContext
export const authContext = createContext(initialState);

// Reducer Function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("role", action.payload.role);
      localStorage.setItem("token", action.payload.token);

      return {
        ...state,
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT":
      // Clear from localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};

// AuthContext Provider Component
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {


    // Update localStorage only for the necessary fields
    if (state.token) {
      localStorage.setItem("token", state.token);
    }
    if (state.user) {
      localStorage.setItem("user", JSON.stringify(state.user));
    }
    if (state.role) {
      localStorage.setItem("role", state.role);
    }
  }, [state.token, state.user, state.role]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        role: state.role,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

// Custom Hook for using AuthContext
import { useContext } from "react";
const useAuth = () => useContext(authContext);

export default useAuth;
