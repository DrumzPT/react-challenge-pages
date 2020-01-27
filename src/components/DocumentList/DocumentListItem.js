import React, {Component} from 'react';

class DocumentListItem extends Component{

    state = {}

    render(){
        return(
            <tr>
                <td data-test="ListItemData">
                    {this.props.documentStatus}
                </td>
                <td data-test="ListItemData">
                    {this.props.documentType}
                </td>
                <td data-test="ListItemData">
                    {this.props.number}
                </td>
                <td data-test="ListItemData" >
                    {this.props.clientName}
                </td>
                <td data-test="ListItemData">
                    {this.props.date}
                </td>
                <td data-test="ListItemData">
                    {this.props.totalWithoutVat}
                </td>
            </tr>
        )
    }
}

export default DocumentListItem