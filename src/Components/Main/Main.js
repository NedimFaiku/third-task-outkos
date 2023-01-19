import React, { useState } from 'react'
import Popup from '../Popup/Popup'
import './Main.css'

function Main() {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className='main' style={{backgroundColor: 'grey'}}>
                <button className='show' onClick={() => setShow(!show)}>Show Popup</button>
            </div>
            {show && <Popup state={setShow}/>}
        </div>
    )
}

export default Main