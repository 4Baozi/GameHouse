import React from 'react';
import './frame.css';

function regularColumn(props) {
    const { data, key, reverse } = props;
    return (
        <div>
            <div className='columns-2' key={key}>
                <div className={reverse ? 'reverse' : ''}>
                    <h1 className='main-title align-center'>{data.title}</h1>
                    <p className='caption-title'>{data.caption}</p>
                </div>
                <div>
                    <img className='column-image' src={data.image} />
                </div>
            </div>
        </div>
    );
}

export default regularColumn;
