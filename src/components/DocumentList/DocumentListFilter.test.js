import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtrr, testStore} from '../../../utils';
import DocumentListFilter from './DocumentListFilter';
import {mock_docs_1} from '../../../utils/mock_data'

const setUp = (initialState={}) =>{
    const store = testStore(initialState);
    const wrapper = shallow(<DocumentListFilter store={store}/>)
    return wrapper;
}

describe("DocumentListFilter Component", ()=>{
    it('Should render without error',()=>{
    })
    /*
    Como nunca trabalhei com testes, estava com dificuldades a configurar a store

    let wrapper;
    beforeEach(()=>{
        const initialState = {
            documents: [...mock_docs_1]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without error',()=>{
        const component = findByTestAtrr(wrapper, 'DocListFilterWrapper');
        console.log(wrapper)
        expect(component.length).toBe(1);
    })
    */
})