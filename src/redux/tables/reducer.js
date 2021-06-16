import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const daysTypes = createReducer([], {
    [actions.getDayTypesSuccess]: (state, { payload }) => [...state, payload],
    [actions.createDayTypeSuccess]: (state, { payload }) => [...state, payload],
    [actions.deleteDayTypeSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
    [actions.editDayTypeSuccess]: (state, { payload }) => [...state, payload],
})

export default combineReducers({
    daysTypes
})