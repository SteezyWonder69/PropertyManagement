import React, { Component } from 'react';
import NewsletterGrid from './newsletter/newsletterGrid';
import RequestsGrid from './requests/requestsGrid';

import TabNav from './tabnav';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid history={this.props.history}/>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <RequestsGrid history={this.props.history}/>
                }
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;
        
        tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

        this.setState({ tabs });
    }

    render() {
        return (
            <div className='dashboard'><TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs}/></div>
        )

    }
}
export default Dashboard;