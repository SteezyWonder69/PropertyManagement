import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';

export default class NewsletterGrid extends Component {
    render() {
        return (
            <div className='newsletter-grid'>
                <NewsletterBox date={new Date()}/>
            </div>
        );
    }
}