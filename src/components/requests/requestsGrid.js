import React, { Component } from 'react';

import Button from '../button';
import Requests from './requests';
import RequestsBoxes from './requestsBoxes';

export default class RequestsGrid extends Component {


    handleAddRequest = () => {
        this.props.history.push('./request/new');
    }

    render() {
        return (
            <div className='requests-grid'>
                <Button className='requests-grid__button' callback={() => this.handleAddRequest()} icon="fas fa-plus"/>
                <RequestsBoxes/>
                <Requests/>
            </div>
        );
    }
}