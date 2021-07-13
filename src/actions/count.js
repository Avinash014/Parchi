import { COUNTER_CHANGE, CREATE_ORDER, SELECT_VENDOR } from "../constants";
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}
export function addOrderAction(order) {
  return {
    type: CREATE_ORDER,
    payload: order,
  };
}
export function addVendorAction(vendor) {
  return {
    type: SELECT_VENDOR,
    payload: vendor,
  };
}
