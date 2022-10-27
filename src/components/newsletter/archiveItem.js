import React from 'react';

export default function ArchiveItem({title, date}) {
    return (
        <div className='archive-item archive-items__item'>
            <div className='archive-item__title'>{title}</div>
            <div className='archive-item__date'>
                { date.getMonth() + 1 }
                /
                { date.getDate() }
                /
                { date.getFullYear() - 2000 }
            </div>
        </div>
    )
}