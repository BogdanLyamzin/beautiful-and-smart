import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const daysTypes = createReducer([], {
    [actions.getDayTypesSuccess]: (_, { payload }) => [...payload],
    [actions.createDayTypeSuccess]: (state, { payload }) => [...state, payload],
    [actions.editDayTypeSuccess]: (state, { payload }) => {
        const filteredState = state.filter(item => item.id !== payload.id);
        const newState = [...filteredState, payload]
        return newState;
    },
    [actions.deleteDayTypeSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
})

export default combineReducers({
    daysTypes
})