import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from './redux/tables/reducer'

const store = configureStore({
    reducer: {
        tables: tablesReducer,
    },
})

export default store;