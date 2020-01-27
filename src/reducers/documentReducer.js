import {GET_DOCUMENTS,FILTER_BY_STATUS,FILTER_BY_TYPE,FILTER_BY_NUMBER,
    FILTER_BY_CLIENT_NAME, FILTER_BY_DATE, FILTER_BY_TOTAL_WITHOUT_VAT,
    APPLY_DOCUMENT_FILTERS}
    from '../actions/types';

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

export default function(state = initialState,action){
    switch(action.type){
        case GET_DOCUMENTS:
            return{
                ...state,
                documents: action.payload,
                filteredDocuments: action.payload
            }
        case FILTER_BY_STATUS:
            return{
                ...state,
                statusFilterValue: action.payload
            }
        case FILTER_BY_TYPE:
            return{
                ...state,
                typeFilterValue: action.payload
            }
        case FILTER_BY_NUMBER:
            return{
                ...state,
                numberFilterValue: action.payload
            }
        case FILTER_BY_CLIENT_NAME:
            return{
                ...state,
                clientNameFilterValue: action.payload
            }
        //Payload[0] = start Date, Payload[1] = end Date
        case FILTER_BY_DATE:
            return{
                ...state,
                startDateFilterValue: action.payload[0],
                endDateFilterValue: action.payload[1]
            }
        case FILTER_BY_TOTAL_WITHOUT_VAT:
            return{
                ...state,
                totalWithoutVatFilterValue: action.payload
            }
        case APPLY_DOCUMENT_FILTERS:
            var filtered = state.documents;
            //filters by Status if there is a fiter Value
            if(state.statusFilterValue !== ''){
                filtered = filtered.filter(doc => doc.status === (state.statusFilterValue));
            }
            //filters by Type if there is a fiter Value
            if(state.typeFilterValue !== ''){
                filtered = filtered.filter(doc => doc.type === (state.typeFilterValue));
            }
            //filter by the number filter value
            if(state.numberFilterValue !== ''){
                filtered = filtered.filter(doc => doc.number.includes(state.numberFilterValue));
            }
            //checks if date is within filter date paramenters
            if(state.startDateFilterValue !== null && state.endDateFilterValue !== null){
                filtered = filtered.filter(doc => {var docDate = new Date(doc.date) 
                    return (docDate >= state.startDateFilterValue && 
                    docDate <= state.endDateFilterValue ? true: false)})
            }
            //filters by client name if there is a filter Value
            if(state.clientNameFilterValue !== ''){
                filtered = filtered.filter(doc => doc.client_name.includes(state.clientNameFilterValue))
            }
            if(state.totalWithoutVatFilterValue !== -1){
                filtered = filtered.filter(doc => 
                    parseInt(doc.total_w_vat) === parseInt(state.totalWithoutVatFilterValue))
            }

            return{
                ...state,
                filteredDocuments: filtered
            }
        default:
            return state;
    }
}