import React, { Component } from 'react';

import ArchiveItem from './archiveItem';


class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    <ArchiveItem title='hey' date={new Date()} />
                    <ArchiveItem title='hey' date={new Date()} />
                    <ArchiveItem title='hey' date={new Date()} />
                    <ArchiveItem title='hey' date={new Date()} />
                </div>
            </div>
        );
    }
}

export default NewsletterArchive;