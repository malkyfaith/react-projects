import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            return { count: state.count - action.decrementBy };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
});

store.subscribe(() => console.log(store.getState()));

const increment = ({incrementBy} = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});

const decrement = ({decrementBy} = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof decrementBy === 'number' ? decrementBy : 1
});

const rest = () => ({
    type: 'RESET'
})

store.dispatch(increment({incrementBy: 2}));

store.dispatch(increment());

store.dispatch(increment());

store.dispatch(decrement());

store.dispatch({
    type: 'RESET'
});



