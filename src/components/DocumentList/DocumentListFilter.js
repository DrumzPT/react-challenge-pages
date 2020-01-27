import React, {Component} from 'react';
import {connect} from 'react-redux';
import {InputGroup, InputGroupAddon, InputGroupText, Input, Row, Col} from 'reactstrap';
import { DateRangePicker } from 'react-dates';

import {filterByStatus, filterByType, filterByNumber,
    filterByDate, filterByClientName, filterByTotalWithoutVat,
     applyDocumentFilters} from '../../actions/documentActions';

class DocumentListFilter extends Component{

    //Used to generate an unique ID
    uuidv4 = require('uuid/v4');

    state = {
        documentStatus: ["","Draft", "Final", "Paid", "Cancelled"],
        documentType: ["","Invoice", "Invoice-Receipt", "Receipt"],
        startDate:null,
        endDate:null,
        focusedInput:null
    }

    //FILTER HANDLERS
    handleStatusChange = (event) => {
        this.props.filterByStatus(event.target.value);
        this.props.applyDocumentFilters();
    }

    handleTypeChange = (event) => {
        this.props.filterByType(event.target.value);
        this.props.applyDocumentFilters();
    }

    handleNumberChange = (event) => {
        this.props.filterByNumber(event.target.value);
        this.props.applyDocumentFilters();
    }

    handleClientNameChange = (event) => {
        this.props.filterByClientName(event.target.value);
        this.props.applyDocumentFilters();
    }

    handleTotalWithoutVatChange = (event) => {
        //-1 means no filter selected
        if(event.target.value === "")
            this.props.filterByTotalWithoutVat(-1);
        else
            this.props.filterByTotalWithoutVat(event.target.value);
        this.props.applyDocumentFilters();
    }

    onDatesChange = ({startDate, endDate}) => {
        this.setState({ startDate, endDate })
        if(!startDate || !endDate) 
            return;
        if(!startDate.isValid() || !endDate.isValid())
            return;
        this.props.filterByDate(startDate,endDate);
        this.props.applyDocumentFilters();
    }

    //FILTER RESETERS
    resetDates = () => {
        this.setState({startDate: null, endDate: null})
        this.props.filterByDate(null,null);
        this.props.applyDocumentFilters();
    }

    render(){
        return(
            <div>
                <Row data-test="DocListFilterWrapper">
                    <Col>
                    <InputGroup className="Status Filter" data-test="DocListFilterInputGroup">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                Document Status
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="status" onChange={this.handleStatusChange}>
                            {this.state.documentStatus.map( (status) =>
                                <option key={"status" + status}>
                                    {status}
                                </option>
                            )}
                        </Input>
                    </InputGroup>
                    </Col>
                    <br />
                    <Col>
                    <InputGroup  className="Type Filter" data-test="DocListFilterInputGroup">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                Document Type
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="type" onChange={this.handleTypeChange}>
                            {this.state.documentType.map( (type) =>
                                <option key={"type" + type}>
                                    {type}
                                </option>
                            )}
                        </Input> 
                    </InputGroup>
                    </Col>
                    <br />
                    <Col>
                    <InputGroup className="Number Filter" data-test="DocListFilterInputGroup">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            Document Number
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Ex: 2018/11" onChange={this.handleNumberChange}/>
                    </InputGroup>
                    </Col>
                </Row>
                
                <br />
                <Row>
                <Col>
                <InputGroup data-test="DocListFilterInputGroup">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                           Client Name
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="António Fernandes" onChange={this.handleClientNameChange}/>
                </InputGroup>  
                </Col>              
                <br />
                <Col>
                <InputGroup data-test="DocListFilterInputGroup">
                <InputGroupAddon addonType="prepend"> 
                    <InputGroupText>Total without VAT</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Amount" min={0} type="number" onChange={this.handleTotalWithoutVatChange}/>
                </InputGroup>
                </Col>
                </Row>
                <br/>
                <Row>
                <Col>
                <InputGroup data-test="DocListFilterInputGroup">
                <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                           Date
                        </InputGroupText>
                    </InputGroupAddon>
                    <DateRangePicker 
                    startDate={this.state.startDate}
                    startDateId={this.uuidv4()}
                    endDate={this.state.endDate}
                    endDateId={this.uuidv4()}
                    focusedInput={this.state.focusedInput}
                    onDatesChange={this.onDatesChange}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    displayFormat="YYYY/MM/DD"
                    isOutsideRange={() => false}
                    />
                <InputGroupAddon addonType="append"> 
                    <InputGroupText onClick={ () => this.resetDates()}>X</InputGroupText>
                </InputGroupAddon>
                </InputGroup>
                <br />
                </Col>
                </Row>

            </div>
        )
    }
}

export default connect(null,{filterByStatus, filterByType, filterByClientName, filterByTotalWithoutVat, filterByNumber,filterByDate, applyDocumentFilters})
(DocumentListFilter)