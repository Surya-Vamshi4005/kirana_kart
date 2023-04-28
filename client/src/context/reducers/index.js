import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer"
import allUserReducer from "./allUserReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";

const myReducers = combineReducers({
    user: userReducer,
    products: productReducer,
    alert: alertReducer,
    allUsers: allUserReducer,
    cart: cartReducer,
    isCart: displayCartReducer,
})

export default myReducers;