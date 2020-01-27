import { createStore } from 'redux';
import rootReducer from '../src/reducers';

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
   return createStore(rootReducer, initialState);
};