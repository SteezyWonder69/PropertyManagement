import React, { Component } from 'react';

import SignupForm from './signupForm';

export default class Signup extends Component {

    onSubmit = (fields) => {
        
    }

    render() {
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        );
    }
}