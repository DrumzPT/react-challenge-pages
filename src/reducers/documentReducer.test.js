import {GET_DOCUMENTS,FILTER_BY_STATUS,FILTER_BY_TYPE,FILTER_BY_NUMBER,
    FILTER_BY_CLIENT_NAME, FILTER_BY_DATE, FILTER_BY_TOTAL_WITHOUT_VAT,
    APPLY_DOCUMENT_FILTERS} from './../actions/types';
import documentReducer from './documentReducer';
import {mock_docs_1, mock_filter_status,mock_filter_number,
    mock_filter_date,mock_filter_total_w_vat} from '../../utils/mock_data';

describe('Document Reducer', () =>{

    const initialState = {
            documents: [],
            filteredDocuments: [],
            statusFilterValue: '',
            typeFilterValue: '',
            numberFilterValue: '',
            clientNameFilterValue: '',
            startDateFilterValue: null,
            endDateFilterValue: null,
            totalWithoutVatFilterValue: -1
        }

    it('Should return default state', () =>{
        const newState = documentReducer(undefined, {});
        expect(newState).toEqual({...initialState});
    })

    describe('Testing GET_DOCUMENTS action', ()=>{
        it('Should return new state containing mock_documents',()=>{
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
            }
            const newState = documentReducer(undefined,{
                type: GET_DOCUMENTS,
                payload: mock_docs_1
            })
            expect(newState).toEqual(expectedState);
        })
    })
 
    describe('Testing FILTER_BY_STATUS action', ()=>{
        it('Should return new state containing a new statusFilterValue',()=>{
            const filterValue = "teste";
            const expectedState = {
                ...initialState,
                statusFilterValue: filterValue
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_STATUS,
                payload: filterValue
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing FILTER_BY_TYPE action', ()=>{
        it('Should return new state containing a new typeFilterValue',()=>{
            const filterValue = "teste";
            const expectedState = {
                ...initialState,
                typeFilterValue: filterValue
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_TYPE,
                payload: filterValue
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing FILTER_BY_NUMBER action', ()=>{
        it('Should return new state containing a new numberFilterValue',()=>{
            const filterValue = "draft";
            const expectedState = {
                ...initialState,
                numberFilterValue: filterValue
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_NUMBER,
                payload: filterValue
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing FILTER_BY_CLIENT_NAME action', ()=>{
        it('Should return new state containing a new clientNameFilterValue',()=>{
            const filterValue = "Elon Tusk";
            const expectedState = {
                ...initialState,
                clientNameFilterValue: filterValue
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_CLIENT_NAME,
                payload: filterValue
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing FILTER_BY_DATE action', ()=>{
        it('Should return new state containing a new startDateFilterValue and endDateFilterValue',()=>{
            const date1 = new Date("2012/12/12");
            const date2 = new Date("2020/02/20");
            const expectedState = {
                ...initialState,
                startDateFilterValue: date1,
                endDateFilterValue: date2
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_DATE,
                payload: [date1,date2]
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing FILTER_BY_TOTAL_WITHOUT_VAT action',()=>{
        it('Should return new state containing a new startDateFilterValue and endDateFilterValue',()=>{
            const filterValue = 1300;
            const expectedState = {
                ...initialState,
                totalWithoutVatFilterValue: filterValue
            }
            const newState = documentReducer(undefined,{
                type: FILTER_BY_TOTAL_WITHOUT_VAT,
                payload: filterValue
            })
            expect(newState).toEqual(expectedState);
        })
    })

    describe('Testing APPLY_DOCUMENT_FILTERS action',()=>{
        it('Should return new state with filteredDocuments filtered by status',()=>{
            const filterValue = "Final";
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_status,
                statusFilterValue: filterValue
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                statusFilterValue: filterValue
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments filtered by type',()=>{
            const filterValue = "Invoice";
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_status,
                typeFilterValue: filterValue
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                typeFilterValue: filterValue
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments filtered by document number',()=>{
            const filterValue = "2019/11";
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_number,
                numberFilterValue: filterValue
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                numberFilterValue: filterValue
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments filtered by date',()=>{
            const startDate = new Date("2019/01/30");
            const endDate = new Date("2019/02/5");
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_date,
                startDateFilterValue: startDate,
                endDateFilterValue: endDate
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                startDateFilterValue: startDate,
                endDateFilterValue: endDate
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments filtered by total_w_vat',()=>{
            const filterValue = 123.42;
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_total_w_vat,
                totalWithoutVatFilterValue: filterValue
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                totalWithoutVatFilterValue: filterValue
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments filtered by multiple filters',()=>{
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_filter_date,
                statusFilterValue:"Draft",
                typeFilterValue:"Invoice-Receipt",
                clientNameFilterValue: "Rick Sanchez",
                totalWithoutVatFilterValue: 13.11
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                statusFilterValue:"Draft",
                typeFilterValue:"Invoice-Receipt",
                clientNameFilterValue: "Rick Sanchez",
                totalWithoutVatFilterValue: 13.11
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

        it('Should return new state with filteredDocuments has an empty array',()=>{
            const expectedState = {
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: [],
                statusFilterValue:"Draft",
                typeFilterValue:"Invoice",
                clientNameFilterValue: "Rachel Green",
                totalWithoutVatFilterValue: 420
            }
            const newState = documentReducer({
                ...initialState,
                documents: mock_docs_1,
                filteredDocuments: mock_docs_1,
                statusFilterValue:"Draft",
                typeFilterValue:"Invoice",
                clientNameFilterValue: "Rachel Green",
                totalWithoutVatFilterValue: 420
            },{
                type: APPLY_DOCUMENT_FILTERS
            })
            expect(newState).toEqual(expectedState);
        })

    })

    
});