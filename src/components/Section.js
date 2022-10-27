
import '../App.css'
import React from 'react';
import './Section.css';
import {Button} from './Button';

function Section() {
    return (
        <div className='section-container'>
            <video src='/videos/coffee_video.mp4' autoPlay loop muted />
            <h1>That First Sip To Keep You Awake</h1>
            <p> Come And Try</p>
            <div className='section-btn'>
                <Button className = 'btn' 
                buttonStyle = 'btn-outline'
                buttonSize = 'btn-large'
                >
                    Get Started
                </Button>
                <Button className = 'btn' 
                buttonStyle = 'btn-primary'
                buttonSize = 'btn-large'
                >
                    Watch Trailer <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Section