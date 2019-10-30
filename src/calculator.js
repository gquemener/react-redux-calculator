import React from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import Screen from './screen';
import Keys from './keys';
import './calculator.css';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'KEY_PRESSED':
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

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const enhancer = composeEnhancers();
const store = createStore(reducer, enhancer);

class Calculator extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="calculator">
                    <Screen />
                    <Keys />
                </div>
            </Provider>
        )
    }
}

export default Calculator
