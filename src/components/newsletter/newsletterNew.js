import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

export default class NewNewsletter extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
            console.log('navigate to dashboard')
            history.push('/dashboard');
        })
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        );
    }
}