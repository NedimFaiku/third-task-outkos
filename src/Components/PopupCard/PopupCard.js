import React from 'react'
import './PopupCard.css'

function PopupCard({ cards }) {
    
    return (
        <div className='cards'>
            {cards.map(card => (
                <div className='card-items'>
                    <p className='card-item-color-text'>{card.name}</p>
                    <div className='card-item-color'>
                        <p>{card.hexCode}</p>
                        <div className='card-item-color-box' style={{ backgroundColor: card.hexCode, border: card.hexCode === '#FFFFFF' ? '0.5px solid rgb(179, 176, 176)' : '0.5px solid ' + card.hexCode } }></div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default PopupCard