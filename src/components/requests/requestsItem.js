import React, { Component } from 'react';

import AnimateHeight from 'react-animate-height';

import Icon from '../icon';
import Button from '../button';

export default class RequestsItem extends Component {

    constructor() {
        super() 

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle' />
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>Sick title bro</div>
                    <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-sort-down' />
                </div>
                <div className='requests-item__tenant-unit'>
                    Spencer - Unit 318
                </div>

                <div className='requests-item__date'>23/5/1005</div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => conosole.log('move buddy')} />

                <div className='requests-item__description'>
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className='requests-item__description'>
                            <img
                                src='http://via.placeholder.com/160x94'
                                className='requests-item__description-img' />
                            <p className='requests-item__description-text'>
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </AnimateHeight>
                </div>

            </div>
        );
    }
}