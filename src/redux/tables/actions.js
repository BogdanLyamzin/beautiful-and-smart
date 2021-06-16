import { createAction } from '@reduxjs/toolkit';

export const getDayTypesRequest = createAction('table/getDayTypesRequest');
export const getDayTypesSuccess = createAction('table/getDayTypesSuccess');
export const getDayTypesError = createAction('table/getDayTypesError');

export const createDayTypeRequest = createAction('table/createDayTypeRequest');
export const createDayTypeSuccess = createAction('table/createDayTypeSuccess');
export const createDayTypeError = createAction('table/createDayTypeError');

export const deleteDayTypeRequest = createAction('table/deleteDayTypeRequest');
export const deleteDayTypeSuccess = createAction('table/deleteDayTypeSuccess');
export const deleteDayTypeError = createAction('table/deleteDayTypeError');

export const editDayTypeRequest = createAction('table/editDayTypeRequest');
export const editDayTypeSuccess = createAction('table/editDayTypeSuccess');
export const editDayTypeError = createAction('table/editDayTypeError');


export default {
    getDayTypesRequest,
    getDayTypesSuccess,
    getDayTypesError,
    createDayTypeRequest,
    createDayTypeSuccess,
    createDayTypeError,
    deleteDayTypeRequest,
    deleteDayTypeSuccess,
    deleteDayTypeError,
    editDayTypeRequest,
    editDayTypeSuccess,
    editDayTypeError,
}

