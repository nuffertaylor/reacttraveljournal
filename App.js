import React from 'react';
import Header from './Header.js';
import LocationCard from "./LocationCard.js";
import data from "./data.js";
    

export default function App(){
    let lc = data.map(d => <LocationCard item={d} key={d.key}/>);
    return(
        <div className="main">
            <Header title="my travel journal."/>
            {lc}
        </div>
    )
}