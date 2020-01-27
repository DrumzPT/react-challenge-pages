import React, {Component} from 'react';
import {Collapse, Button, Container } from 'reactstrap';
import DocumentList from './DocumentList';
import DocumentListFilter from './DocumentListFilter';

class DocumentContainer extends Component{

    state = {
        isFilterOpen: false
    }

    //Toggles the Colapse containing the Filter Input Group
    toggle = () => {
        this.setState({isFilterOpen: !this.state.isFilterOpen})
        
    }

    render(){
        return(
            <Container style={{marginTop: "2rem"}} data-test="DocContainerComponent">
                <Button color="primary" onClick={this.toggle} block
                data-test="ShowFilterButton"
                > Show Filter </Button>
                <br />
                <Collapse data-test="CollapseFilter" isOpen={this.state.isFilterOpen}>
                    <br />
                    <div data-test="DocumentListFilterWrapper">
                    <DocumentListFilter />
                    </div>
                </Collapse>
                
                <div data-test="DocumentList">
                <DocumentList />
                </div>
            </Container>
        )
    }
}

export default DocumentContainer