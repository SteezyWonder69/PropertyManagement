import React from 'react';

export default function ArchiveItem({title, date}) {
    return (
        <div className='archive-item'>
            <div className='archive-item__title'>{title}</div>
            <div className='archive-item__date'>{date}</div>
        </div>
    )
}