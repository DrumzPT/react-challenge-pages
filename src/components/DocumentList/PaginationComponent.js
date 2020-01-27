import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink,} from 'reactstrap';

class PaginationComponent extends Component{

    state = {
        isFilterOpen: false
    }

    render(){
        return(
            <Pagination data-test="PaginationWrapper">
                    <PaginationItem disabled={this.props.currentPage <= 0} data-test="FirstPage">
                        <PaginationLink first onClick={e=> this.props.handlePageClick(e,0)}/>
                    </PaginationItem>
                    <PaginationItem disabled={this.props.currentPage <= 0} data-test="PreviousPage">
                        <PaginationLink previous onClick={e=> this.props.handlePreviousClick(e)} />
                    </PaginationItem>
                    {
                    this.props.numberOfPages > 0 ?
                    [...Array(this.props.numberOfPages)].map((_, i) => (
                    <PaginationItem key={i} active={i === this.props.currentPage} data-test="SelectPage"> 
                        <PaginationLink onClick={e=> this.props.handlePageClick(e,i)} href="#">
                            {i + 1}
                        </PaginationLink>
                    </PaginationItem>   
                    ))
                    :
                    null
                    }

                    <PaginationItem disabled={this.props.currentPage >= this.props.numberOfPages-1} data-test="NextPage">
                        <PaginationLink next onClick={e=> this.props.handleNextClick(e)} />
                    </PaginationItem>
                    <PaginationItem disabled={this.props.currentPage >= this.props.numberOfPages-1} data-test="LastPage">
                        <PaginationLink last onClick={e=> 
                            this.props.handlePageClick(e,this.props.numberOfPages-1)} />
                    </PaginationItem>
                </Pagination>
        )
    }
}

export default PaginationComponent