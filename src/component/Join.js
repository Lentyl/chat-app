import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../style/main.scss';




const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');




    return (
        <div className="join-container">
            <div className='join-container__iner'>
                <h1 className='heading'>Join</h1>
                <div><input className='join-container__input' placeholder='Name' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div><input className='join-container__input' placeholder='Room' type='text' onChange={(event) => setRoom(event.target.value)} /></div>

                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}` >
                    <button className='join-container__button' type='submit'>Sign In</button>
                </Link>
            </div>

        </div>

    )
}

export default Join;