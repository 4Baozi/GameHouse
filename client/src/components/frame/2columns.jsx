import React from 'react';
import {landingData} from '../../fixtures/landingpage';
import './2columns.css';

function regularColumn(props){
    return(
        <div>
            {landingData.map((data,key)=>{
              return(
                <div className='columns-2' key={key}>           
                    <div>
                        <h1 className="main-title">{data.title}</h1>
                        <p className="caption-title">{data.caption}</p>
                    </div>
                    <div>
                       <img className="column-image" src={data.image}/>                 
                    </div>
                </div>
               );
            })}
        </div>
    )
}

export  default regularColumn;