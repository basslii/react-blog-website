import React from 'react';
import CardItems from './Carditems.js';
import './Cards.css';

function Cards() {
    return(
        <div className='cards'>
            <h1>Check out these tasteful coffee</h1>
            <div className='cards-container'>
                <div className='cards-wrapper'>
                    <ul className='cards-items'>
                        <CardItems 
                        src={require('./images/kopenhagen.jpeg')}
                        text='Embrace yourself for the productivity of the day'
                        label='Coffee'
                        path='/services'
                        />
                        <CardItems 
                        src={require('./images/Yas&Nas.jpg')}
                        text='Enjoy the moments you have with your companies '
                        label='Friends'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards-items'>
                        <CardItems 
                        src={require('./images/starbucks.jpeg')}
                        text='Plan your day with a cup of coffee'
                        label='Coffee'
                        path='/services'
                        />
                        <CardItems 
                        src={require('./images/heesan-interior.jpeg')}
                        text='Visit your local coffeehouse for surprises'
                        label='Local Store'
                        path='/services'
                        />
                        <CardItems 
                        src={require('./images/daily-fix.jpeg')}
                        text='A coffee dessert for all coffee lovers out there!'
                        label='Desserts'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;