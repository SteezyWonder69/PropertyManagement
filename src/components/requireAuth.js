import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposedComponent) {
    class Authentication extends Component{
        
        UNSAFE_componentWillMount() {
            console.log(this.props.authenticated)
            if(!this.props.authenticated) {
                history.push('/')
            };
        };
        UNSAFE_componentWillUpdate(nextProps) {
           
            if(!nextProps.authenticated) {
                history.push('/');
            };
        };
        render() {
            return <ComposedComponent/>
        };
    };
    
    function mapStateToProps(state) {
        console.log(state.auth, "hey there");
        // const { authenticated } = state.auth;
        return { authenticated: state.auth };
    };
    return connect(mapStateToProps)(Authentication);
};