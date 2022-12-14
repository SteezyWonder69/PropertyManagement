import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';

class NewNewsletterForm extends Component {

    render() {

        const { handleSubmit, formTitle, newsletterToEdit } = this.props;

        var title = null
        var body = null
        var imageUrl = null
        if(newsletterToEdit) {
            title = newsletterToEdit.title;
            body = newsletterToEdit.body;
            imageUrl = newsletterToEdit.imageUrl;
        }

        return (
            <form onSubmit={handleSubmit} className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text={formTitle} />
                <Field className='new-newsletter-form__newsletter-title' placeholder='Newsletter Title' component={FormInput} name='title' type='text' title='Newsletter Title'  editValue={title ? title : null}/>
                <Field className='new-newsletter-form__body' placeholder='Newsletter Body' component={FormTextArea} name='body' type='text' title='Body' editValue={body ? body : null}/>
                <Field className='new-newsletter-form__submit' small={true} danger={true} component={FormButton} name='submit' type='submit' title='Submit' />
                <Field className='new-newsletter-form__cancel' small={true} component={FormButton} name='cancel' type='button' title='Cancel' onClick={this.props.onCancel} />
                <Field className='new-newsletter-form__image' component={FormImage} name='image' type='file' title='Image' imageUrl={imageUrl}/>
            </form>
        );
    }
}

NewNewsletterForm = reduxForm({
    form: 'newnewsletter'
})(NewNewsletterForm)

export default NewNewsletterForm;