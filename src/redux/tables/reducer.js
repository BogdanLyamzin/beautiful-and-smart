import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const daysTypes = createReducer([], {
    [actions.getDayTypesSuccess]: (state, { payload }) => [...state, payload],
})

export default combineReducers({
    daysTypes
})