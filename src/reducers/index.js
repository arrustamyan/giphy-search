const initialState = {
    results: []
};

export default function app(state = initialState, action) {
    switch (action.type) {
        case 'RESULTS':
            return Object.assign({}, state, { results: action.results });
        default:
            return state;
    }
}
