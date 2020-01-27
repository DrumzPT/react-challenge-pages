import React from 'react';
import {shallow} from 'enzyme';
import PaginationComponent from './PaginationComponent';

import { findByTestAtrr} from '../../../utils';

const setUp = (props={}) => {
    const component = shallow(<PaginationComponent {...props}/>);
    return component;
}

describe('Pagination Component', () => {
    
    describe('Rendering tests', () => {
        it('Should render the PaginationWrapper, without errors', () =>{
            const wrapper = setUp();
            const container = findByTestAtrr(wrapper, 'PaginationWrapper')
            expect(container.length).toBe(1);
        });

        it('Should render the first, previous, next and last page Pagination Items, without errors', () =>{
            const wrapper = setUp();
            const first = findByTestAtrr(wrapper, 'FirstPage');
            const previous = findByTestAtrr(wrapper, 'PreviousPage');
            const next = findByTestAtrr(wrapper, 'NextPage');
            const last = findByTestAtrr(wrapper, 'LastPage');
            expect(first.length).toBe(1);
            expect(previous.length).toBe(1);
            expect(next.length).toBe(1);
            expect(last.length).toBe(1);
        });
        describe('Have valid props', () => {

            it('Should render the number of SelectPage Pagination Items passed by props, without errors', () =>{
                const props = {
                    numberOfPages: 4,
                    currentPage: 1,
                    handlePageClick: ()=>{},
                    handlePreviousClick: ()=>{},
                    handleNextClick: ()=>{}
                };
                const wrapper = setUp(props);
                const selectPage = findByTestAtrr(wrapper, 'SelectPage');
                expect(selectPage.length).toBe(4)
            })
    
        });

        describe('Have invalid props', () => {
            it('Should NOT render SelectPage Pagination Item, without errors', () =>{
                const props = {
                    numberOfPages: -3,
                    currentPage: -76,
                    handlePageClick: ()=>{},
                    handlePreviousClick: ()=>{},
                    handleNextClick: ()=>{}
                };
                const wrapper = setUp(props);
                const selectPage = findByTestAtrr(wrapper, 'SelectPage');
                expect(selectPage.length).toBe(0)
            })
        })
        describe('Have no props', () => {
            it('Should NOT render SelectPage Pagination Item, without errors', () =>{
                const wrapper = setUp();
                const selectPage = findByTestAtrr(wrapper, 'SelectPage');
                expect(selectPage.length).toBe(0)
            })
        })
    })
})