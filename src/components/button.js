import React from 'react';

export default function Button({callback, text, icon, className}) {
    if(icon) {
        return (
            <a onClick={callback} className={`${className} button`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d={icon}/></svg>
            </a>
        )
    }
}