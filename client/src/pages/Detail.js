import * as React from 'react';
import { useLocation } from "react-router-dom"
import { useEffect } from "react";



const Detail = () => {

    let location = useLocation();
    console.log(location, " useLocation Hook");
    const data = location.state?.data;

    return (
        <div>
            <h1>Detail {data.name}</h1>
        </div>
    )
}

export default Detail
