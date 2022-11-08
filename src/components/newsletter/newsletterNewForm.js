import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

class NewNewsletterForm extends Component {
    render() {

        const { handleSubmit, formTitle, newsletterToEdit } = this.props;
        const { title, body, imageURL } = newsletterToEdit;

        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text={formTitle} />
                <Field className='new-newsletter-form__newsletter-title' placeholder='Newsletter Title' component={FormInput} name='title' type='text' title='Newsletter Title' />
                <Field className='new-newsletter-form__body' placeholder='Newsletter Body' component={FormTextArea} name='body' type='text' title='Body' />
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title='Submit' />
                <Field className='new-newsletter-form__cancel' small={true} component={FormButton} name='cancel' type='button' title='Cancel' onClick={this.props.onCancel} />
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file' title='Image' />
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: 'newnewsletter'
})(NewNewsletterForm)

export default NewNewsletterForm;