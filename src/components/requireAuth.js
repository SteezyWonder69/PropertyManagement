import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposedComponent) {
    class Authentication extends Component{
        UNSAFE_componentWillMount() {
            console.log(this.props.auth)
            if(!!this.props.authenticated) {
                history.push('/')
            };
        };
        UNSAFE_componentWillUpdate(nextProps) {
           
            if(!!nextProps.authenticated) {
                history.push('/');
            };
        };
        render() {
            return <ComposedComponent/>
        };
    };
    
    function mapStateToProps(state) {
        console.log(state.auth, "hey there");
        const { authenticated } = state.auth;
        return { authenticated };
    };
    return connect(mapStateToProps)(Authentication);
};