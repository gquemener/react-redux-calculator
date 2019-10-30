import { KEY_PRESSED } from './actions';
import { compose, createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const reducer = (state = [], action) => {
    switch (action.type) {
        case KEY_PRESSED:
            if ('AC' === action.value) {
                return [];
            }

            if ('=' === action.value) {
                return ['' + eval(state.join(''))];
            }

            return [...state, action.value];

        default:
            return state;
    }
}

const configureStore = () => {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
        compose;

    const persistedState = loadState();
    const enhancer = composeEnhancers();
    const store = createStore(reducer, persistedState, enhancer);

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000))

    return store;
};

export default configureStore;
