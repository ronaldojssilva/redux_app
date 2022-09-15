export const clickReducer = (state = { msg: '' }, action) => {
    switch (action.type) {
        case 'CLICK_HELLO':
            return { ...state, msg: 'School of net' }
            break;

        default:
            return state;
    }
} 