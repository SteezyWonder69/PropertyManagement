import React, { Component } from 'react';

import SigninForm from './signinForm';

export default class Signin extends Component {
    render() {
        return (
            <div className='sign-in'>
                
                <SigninForm/>
            </div>
        );
    }
}