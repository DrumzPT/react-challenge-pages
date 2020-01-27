import React from 'react';
import {shallow} from 'enzyme';
import DocumentContainer from './DocumentContainer';

import { findByTestAtrr} from '../../../utils';

const setUp = () => {
    const component = shallow(<DocumentContainer/>);
    return component;
}

describe('Document Container', () => {

    let component;
    beforeEach(()=>{
        component = setUp();
    });

    describe('Rendering tests', () => {
        it('Should render Container, without errors', () =>{
            const container = findByTestAtrr(component, 'DocContainerComponent')
            expect(container.length).toBe(1);
        });
        
        it('Should render the show filter button, without errors', () =>{
            const container = findByTestAtrr(component, 'ShowFilterButton')
            expect(container.length).toBe(1);
        });
        
        it('Should render the Collapse, without errors', () =>{
            const container = findByTestAtrr(component, 'CollapseFilter')
            expect(container.length).toBe(1);
        });
    
        it('Should render the Document List Filter', () =>{
            const container = findByTestAtrr(component, 'DocumentListFilterWrapper')
            expect(container.length).toBe(1);
        })
    
        it('Should render the Document List', () =>{
            const container = findByTestAtrr(component, 'DocumentList')
            expect(container.length).toBe(1);
            
        })
    })
    
})