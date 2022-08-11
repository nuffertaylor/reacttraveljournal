import React from 'react';

export default function LocationCard(props){
    return(
        <div className="location_card">
            <div className="location_img_container">
            <img className="location_img" src={props.item.imageUrl} /></div>
            <div className="location_header">
                <div className="location_header_row1">
                    <img className="location_icon" />
                    <div className="location_country">{props.item.location}</div>
                    <a href={props.item.googleMapsUrl} className="location_link">View on Google Maps</a>
                </div>
                <div className="location_name">{props.item.title}</div>
            </div>
            <div className="location_text">
                <div className="location_timeframe">{props.item.startDate + " - " + props.item.endDate}</div>
                <div className="location_description">{props.item.description}</div>
            </div>
        </div>
    );
}