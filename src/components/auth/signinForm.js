import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class SigninForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className='sign-in-form'>
                <FormTitle className='sign-in-form__title' text='Login' />
                <Field className='sign-in-form__email' placeholder='Enter Email' component={FormInput} name='email' type='email' title='Email' />
                <Field className='sign-in-form__password' placeholder='Enter Password' component={FormInput} name='password' type='password' title='Password' />
                <Field className='sign-in-form__login' component={FormButton} name='login' type='submit' title='Login' />
                <div className='sign-in-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password' />
                    <TextLink to='/signup' text='Not a Member? Register here' />
                </div>
            </form>
        );
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm)

export default SigninForm;