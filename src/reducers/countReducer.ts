import { COUNTER_CHANGE } from "../constants";
import { CREATE_ORDER,SELECT_VENDOR, PAST_ORDER } from "../constants";

const initialState = {
  count: 0,
  order:{},
  vendor:'',
  pastOrderList:[]
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
    case PAST_ORDER:{
      let newOrderList:any = state.pastOrderList
      newOrderList.unshift(action.payload)
      return {
        ...state,
        pastOrderList: newOrderList,
      } 
    };
      
    default:
      return state;
  }
};
export default countReducer;
