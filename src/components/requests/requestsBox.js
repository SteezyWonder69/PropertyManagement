import React, { Component } from 'react';


class RequestsBox extends Component {
    render() {
        const { count, title } = this.props;
        return (
            <a onClick={() => console.log('asdvknrnnrnnrntntn')} className='requests-box'>
                <div className='requests-box__count'>{count}</div>
                <div className='requests-box__title'>{title}</div>
                <div className='requests-box__point'></div>
            </a>
        );
    }
}



export default RequestsBox;