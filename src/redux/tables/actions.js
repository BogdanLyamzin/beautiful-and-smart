import { createAction } from '@reduxjs/toolkit';

export const getDayTypesRequest = createAction('table/getDayTypesRequest');
export const getDayTypesSuccess = createAction('table/getDayTypesSuccess');
export const getDayTypesError = createAction('table/getDayTypesError');

export default {
    getDayTypesRequest,
    getDayTypesSuccess,
    getDayTypesError
}

