import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignupForm from './signupForm';
import history from '../../history';

class Signup extends Component {

    onSubmit = (fields) => {
        
        this.props.signUp(fields, () => {
            console.log('navigate to dashboard')
            console.log(this.props.authenticated)
            history.push('/dashboard')
            
        })
    }

    render() {
        
        return (
            <div className='sign-up'>
                <SignupForm onSubmit={(event) => this.onSubmit(event)} />
                
            </div>
        );
    }
}

export default connect(null, actions)(Signup);