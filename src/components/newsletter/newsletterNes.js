import React, { Component } from 'react';
import SigninForm from '../auth/signinForm';

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
                <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        );
    }
}