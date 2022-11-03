import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

export default class NewNewsletter extends Component {

    onSubmit = (fields) => {
        console.log('trying to submit')
        // if(button == 'submit') {
        //     // save new newsletter on the backend. perform a post request here
        //     console.log('trying to save to backend')
        // }
        // this.props.history.push('/dashboard')
    }

    onCancel = () => {
        console.log('trying to cancel')
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        );
    }
}