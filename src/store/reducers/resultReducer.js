import * as actionTypes from '../actionTypes';

const initialState = {
    results : []
}

const resultReducer = (state = initialState, action) => {

    switch (action.type)
    {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results : state.results.concat({id : new Date().getTime(), value : action.value})
            }
        case actionTypes.DELETE: 
            let updatedArray = state.results.filter((result) => result.id !== action.resultId);
            return {
                ...state,
                results : updatedArray
            }
    }
    return state;
}

export default resultReducer;