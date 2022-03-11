import { ACTION_TYPE_ERROR, ACTION_TYPE_FIELD, ACTION_TYPE_LOGIN, ACTION_TYPE_LOGOUT, ACTION_TYPE_SUCCESS } from "../../utils/constants";

export function loginReducer(state, action) {
    switch (action.type) {
      case ACTION_TYPE_FIELD: {
        console.log("field");
        return {
          ...state,
          [action.field]: action.value,
        };
      }
      case ACTION_TYPE_SUCCESS: {
        console.log("success");
        return {
          ...state,
          isLoggedIn: true,
          error: "",
        };
      }
      case ACTION_TYPE_LOGIN: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case ACTION_TYPE_ERROR: {
        console.log("error");
        return {
          ...state,
          error: "Incorrect Credentials",
          isLoading: false,
        };
      }
      case ACTION_TYPE_LOGOUT:
        {
          console.log("logout");
          return {
            ...state,
            isLoggedIn: false,
            isLoading: false,
          };
        }
        break;
  
      default:
        break;
    }
    return state;
  }