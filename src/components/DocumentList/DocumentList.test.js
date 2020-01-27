import React from 'react';
import {shallow} from 'enzyme';
import DocumentList from './DocumentList';

import { findByTestAtrr} from '../../../utils';

const setUp = () => {
    const component = shallow(<DocumentList/>);
    return component;
}

describe('Document List Component', () => {
    it('blanks',()=>{})
    /*
    Falta a store
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    describe('Rendering tests', () => {
        it('Should render the table, without errors', () =>{
            const container = findByTestAtrr(component, 'DocumentTable')
            expect(container.length).toBe(1);
        });

        it('Should render the Pagination Collapse, without errors', () =>{
            const container = findByTestAtrr(component, 'PaginationCollapse')
            expect(container.length).toBe(1);
        });
        
    })
    */
})