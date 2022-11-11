import React, { Component } from 'react';
import RequestsBox from './requestsBox';

export default class RequestsBoxes extends Component {
    render() {
        return (
            <div className='requests-boxes'>
                <RequestsBox title={'Pending'} count={2}/>
                <RequestsBox title={'In Progress'} count={1}/>
                <RequestsBox title={'Complete'} count={0}/>
            </div>
        );
    }
}