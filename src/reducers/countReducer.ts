import { COUNTER_CHANGE } from "../constants";
import { CREATE_ORDER,SELECT_VENDOR } from "../constants";

const initialState = {
  count: 0,
  order:{},
  vendor:''
};
const countReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: action.payload,
      };
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
      case SELECT_VENDOR:
      return {
        ...state,
        vendor: action.payload,
      };
      
    default:
      return state;
  }
};
export default countReducer;
