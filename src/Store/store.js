import { configureStore } from "@reduxjs/toolkit";
import accounsReducer from "./accounsReducer";
import counterReducer from "./counterReducer";

const store = configureStore({
    reducer : {
        accounts : accounsReducer,
        counter : counterReducer,
    }
})

export default store;