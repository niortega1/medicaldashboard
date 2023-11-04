import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import patientsReducer from "./slices/patientsSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        patients: patientsReducer,
    }
});

export default store;