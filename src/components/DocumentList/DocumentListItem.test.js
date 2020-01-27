import React from 'react';
import {shallow} from 'enzyme';
import DocumentListItem from './DocumentListItem';

import { findByTestAtrr} from '../../../utils';

const setUp = () => {
    const component = shallow(<DocumentListItem/>);
    return component;
}

describe('Document List Item Component', () => {
    
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    describe('Rendering tests', () => {
        it('Should render all the List Item table data, without errors', () =>{
            const container = findByTestAtrr(component, 'ListItemData')
            expect(container.length).toBe(6);
        });

    })
})