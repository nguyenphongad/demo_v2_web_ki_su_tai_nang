import GLOBALTYPES from '../actions/globalTypes';

const initialState = {
    pages: [],
    pathName: '',
    pageName: '',
    tables: []
};

function pageReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBALTYPES.PAGE.GET_DYNAMIC_PAGES: {
            return {
                ...state,
                pages: [...action.payload.pages]
            };
        }
        case GLOBALTYPES.PAGE.SET_DYNAMIC_PAGE:
            return {
                ...state,
                pathName: action.payload.pathName
            };
        case GLOBALTYPES.PAGE.DYNAMIC_PAGE_INFO:
            return {
                ...state,
                pageName: action.payload.pageName,
                tables: [...action.payload.tables]
            };
        default:
            return state;
    }
}

export default pageReducer;
