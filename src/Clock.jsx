import React, { useState, useEffect } from 'react';
import './Styles/clock.css';

const Clock = () => {
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const nombre = 'Florencia Tatiana';
    const apellidos = 'Balducchi';

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
        clearInterval(timerID);
        };
    }, []);

    const tick = () => {
        setFecha(new Date());
        setEdad(prevEdad => prevEdad + 1);
    };

    return (
        <div className='clock-container'>
            <h2 className='clock-time'>Hora Actual: {fecha.toLocaleTimeString()}</h2>
            <h3 className='clock-details'>{nombre} {apellidos}</h3>
            <h1 className='clock-details'>Edad: {edad}</h1>
        </div>
    );

};

export default Clock;
