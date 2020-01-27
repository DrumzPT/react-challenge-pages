import {GET_DOCUMENTS,FILTER_BY_STATUS,FILTER_BY_TYPE,FILTER_BY_NUMBER,
    FILTER_BY_CLIENT_NAME, FILTER_BY_DATE, FILTER_BY_TOTAL_WITHOUT_VAT,
    APPLY_DOCUMENT_FILTERS}
    from '../actions/types';

const documentList = require("../data/documents.json");

//This is where the API Call would be implemented
export const getDocuments = () => {
    return{
        type: GET_DOCUMENTS,
        payload: documentList.documents
    }
}

export const filterByStatus = (filterValue) => {
    return{
        type: FILTER_BY_STATUS,
        payload: filterValue
    }
}

export const filterByType = (filterValue) => {
    return{
        type: FILTER_BY_TYPE,
        payload: filterValue
    }
}

export const filterByNumber = (filterValue) =>{
    return{
        type: FILTER_BY_NUMBER,
        payload: filterValue
    }
}

export const filterByClientName = (filterValue) =>{
    return{
        type: FILTER_BY_CLIENT_NAME,
        payload: filterValue
    }
}

export const filterByDate = (startDate, endDate) =>{
    return{
        type: FILTER_BY_DATE,
        payload: [startDate,endDate]
    }
}

export const filterByTotalWithoutVat = (filterValue) =>{
    return{
        type: FILTER_BY_TOTAL_WITHOUT_VAT,
        payload: filterValue
    }
}

export const applyDocumentFilters = () => {
    return{
        type: APPLY_DOCUMENT_FILTERS
    }
}