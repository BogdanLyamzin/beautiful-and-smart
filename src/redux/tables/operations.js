import axios from 'axios';

import { getDayTypesRequest, getDayTypesSuccess, getDayTypesError, createDayTypeRequest, createDayTypeSuccess, createDayTypeError, deleteDayTypeRequest, deleteDayTypeSuccess, deleteDayTypeError, editDayTypeRequest, editDayTypeSuccess, editDayTypeError } from './actions';

axios.defaults.baseURL = 'http://localhost:3004';

export const getDayTypes = () => async dispatch => {
    dispatch(getDayTypesRequest())
    try {
        const { data } = await axios.get('/days');
        dispatch(getDayTypesSuccess(data))
    }
    catch (error) {
        dispatch(getDayTypesError(error))
    }
}

export const createDayType = (body) => async dispatch => {
    dispatch(createDayTypeRequest())
    try {
        const { data } = await axios.post('/days', body);
        dispatch(createDayTypeSuccess(data))
    }
    catch (error) {
        dispatch(createDayTypeError(error))
    }
}

export const deleteDayType = (id) => async dispatch => {
    dispatch(deleteDayTypeRequest());
    try {
        await axios.delete(`/days/${id}`)
        dispatch(deleteDayTypeSuccess(id))
    }
    catch (error) {
        dispatch(deleteDayTypeError(error))
    }
}

export const editDayType = (id, body) => async dispatch => {
    dispatch(editDayTypeRequest())
    try {
        const { data } = await axios.patch(`/days/${id}`, body);
        dispatch(editDayTypeSuccess(data))
    } catch (error) {
        dispatch(editDayTypeError(error))
    }
}

export default {
    getDayTypes,
    createDayType,
    deleteDayType,
};