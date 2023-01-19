import React from 'react'
import './Popup.css'
import { data } from '../../data'
import PopupCard from '../PopupCard/PopupCard'

function Popup({ state }) {
    return (
        <div>
            <div className='container1' onClick={() => { state(false) }}></div>
            <div className='card'>
                <div className='card-title'>
                    <p>Theme color</p>
                    <p>Change theme</p>
                </div>
                <PopupCard cards={data} />
                <div className='buttons'>
                    <div className='btn-end'>
                        <button className='btn cancel' onClick={() => { state(false) }}>Cancel</button>
                        <button className='btn save'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup