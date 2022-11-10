import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {

    handleAddNewsletter = () => {
        this.props.history.push('./newsletter/new');
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchNewsletters();
        }, 500);
        
    }

    render() {

        return (
            <div className='newsletter-grid'>
                <Button className='newsletter-grid__button' callback={() => this.handleAddNewsletter()} icon="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                <NewsletterBox {...this.props.latestNewsletter}/>
                <NewsletterArchive/>
                <NewsletterLatest {...this.props.latestNewsletter}  />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters;
    const latestNewsletter = newsletters[0]
    return {
        latestNewsletter
    }
}

export default connect(mapStateToProps, actions)(NewsletterGrid);