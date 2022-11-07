import React, { Component } from 'react';

import { connect } from 'react-redux';

import ArchiveItem from './archiveItem';


class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    
                    {
                        this.props.newsletters.map(newsletter => {
                            return <ArchiveItem key={newsletter._id} {...newsletter} />
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { newsletters } = state.newsletters
    return {
        newsletters
    }
}

export default connect(mapStateToProps)(NewsletterArchive);
