import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposedComponent) {
    class Authentication extends Component{
        
        UNSAFE_componentWillMount() {
            if(!this.props.authenticated) {
                console.log('sup pussy')
                history.push('/')
            };
        };
        UNSAFE_componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                console.log('asdfghh')
                history.push('/');
            };
        };
        render() {
            return <ComposedComponent/>
        };
    };
    
    function mapStateToProps(state) {
        return { authenticated: state.auth[Object.keys(state.auth)[0]] };
    };
    return connect(mapStateToProps)(Authentication);
};