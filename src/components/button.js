import React from 'react';

export default function Button({callback, icon, className}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <i className={icon}></i>
            </a>
        )
    }
}