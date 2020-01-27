import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Collapse} from 'reactstrap';

import DocumentListItem from './DocumentListItem';
import PaginationComponent from './PaginationComponent';
import {getDocuments} from '../../actions/documentActions';

class DocumentList extends Component{

    state = {
        documentsLoaded: false,
        pagination:{
            sliceStep: 7,
            sliceStart: 0,
            sliceEnd: 7,
            numberOfPages: 0,
            currentPage: 0,
        }
        
    }

    componentDidMount(){
        //calls the action in order to get the list of documents
        if(!this.state.documentsLoaded){
            this.props.getDocuments();
            this.setState({documentsLoaded:true})
        }
    }

    componentDidUpdate(){
        //Checks if the number of pages has changed from an update
        //this solution does not scale well, 
        //a better solution would be if the documents file had a size variable
        //in that case it's not needed to iterate the array every tyme
        var numberOfPages = Math.ceil(this.props.documents.filteredDocuments.length / 7)
        if(numberOfPages !== this.state.pagination.numberOfPages){
            this.setState(prevState => ({pagination:{
                ...prevState.pagination,
                numberOfPages
            }}))
        }
    }

    //Handles a pagination button click event
    handlePageClick = (e,i) => {
        this.setState(prevState => ({pagination:{
            ...prevState.pagination,
            currentPage: i,
            sliceStart: i * prevState.pagination.sliceStep,
            sliceEnd: (i+1) * prevState.pagination.sliceStep
        }}))
    }

    //Handles the previous page button click event
    handlePreviousClick = (e)=>{
        this.setState(prevState => ({pagination:{
            ...prevState.pagination,
            currentPage: prevState.pagination.currentPage-1,
            sliceStart: (prevState.pagination.currentPage-1) * prevState.pagination.sliceStep,
            sliceEnd: prevState.pagination.currentPage * prevState.pagination.sliceStep
        }}))
    }

    //Handles the next page button click event
    handleNextClick = (e)=>{
        this.setState(prevState => ({pagination:{
            ...prevState.pagination,
            currentPage: prevState.pagination.currentPage+1,
            sliceStart: (prevState.pagination.currentPage+1) * prevState.pagination.sliceStep,
            sliceEnd: (prevState.pagination.currentPage+2) * prevState.pagination.sliceStep
        }}))
    }

    render(){
        return(
            <div>
            <Table striped responsive bordered data-test="DocumentTable">
                <thead>
                    <tr>
                        <th>Document status</th>
                        <th>Document type</th>
                        <th>Number</th>
                        <th>Client name</th>
                        <th>Date</th>
                        <th>Total without VAT</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.documents.filteredDocuments
                    .slice(this.state.pagination.sliceStart,this.state.pagination.sliceEnd)
                    .map(({status,type,number,client_name,date,total_w_vat},index) => 
                        <DocumentListItem 
                        key={index}
                        documentStatus={status}
                        documentType={type}
                        number={number}
                        clientName={client_name}
                        date={date}
                        totalWithoutVat={total_w_vat}
                    />
                    )}
                </tbody>
            </Table>
            <Collapse isOpen={this.state.pagination.numberOfPages !== 0} data-test="PaginationCollapse">
            <PaginationComponent 
                numberOfPages={this.state.pagination.numberOfPages}
                currentPage={this.state.pagination.currentPage}
                handlePageClick={this.handlePageClick}
                handlePreviousClick={this.handlePreviousClick}
                handleNextClick={this.handleNextClick}
            />
            </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    documents: state.documents,
})

export default connect(mapStateToProps,{getDocuments})(DocumentList)