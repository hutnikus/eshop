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
            <img src={data.img} alt='' height={150} width={150} />
            <div>{data.price}czk</div>         
        </div>
    )
}

export default Detail
