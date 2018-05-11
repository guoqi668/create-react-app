export default function counter(state={count: 0,a: 'n'}, action) {

    const count = state.count;
    switch(action.type) {
        case 'increase':
            return {count: count+1};
        default:
            return state;
    }
}