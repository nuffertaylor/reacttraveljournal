import React from 'react';

export default function Header(props){
    return(
    <div className="header">
        <div className="header_container">
        <img className="header_icon" alt="icon" />
        <div className="header_text">{props.title}</div>
        </div>
    </div>
    )
}