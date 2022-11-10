import React, { Component } from 'react';

import Button from '../button';

export default class RequestsGrid extends Component {


    handleAddRequest = () => {
        this.props.history.push('./request/new');
    }

    render() {
        return (
            <div className='requests-grid'>
                 <Button className='requests-grid__button' callback={() => this.handleAddRequest()} icon="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>

            </div>
        );
    }
}