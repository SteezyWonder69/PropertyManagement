import React, { Component } from 'react';

import SignupForm from './signupForm';

export default class Signup extends Component {
    render() {
        return (
            <div className='sign-up'>
                <SignupForm/>
            </div>
        );
    }
}