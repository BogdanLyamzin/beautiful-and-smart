import axios from 'axios';

import { getDayTypesRequest, getDayTypesSuccess, getDayTypesError } from './actions';

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

export default {
    getDayTypes,
};