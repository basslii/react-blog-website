import React from 'react';
import {Button} from './Button';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the coffee hunting newsletter to receive our best coffee locations
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder='Your Email' className='footer-input' />
                         <Button buttonStyle='btn-outline'>Subscribe</Button>
                    </form>
                </div>
            </section>

            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How It Works</Link>
                        <Link to='/'>testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Videos</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>Snapchat</Link>
                        <Link to='/'>Spotify</Link>
                    </div>
                </div>
            </div>

            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            COFFEE & COMPANY 
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Coffee & Company © 2022
                    </small>
                    <div className='social-icons'>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'>
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            class='social-icon-link Twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link
                            class='social-icon-link Snapchat'
                            to='/'
                            target='_blank'
                            aria-label='Snapchat'>
                            <i class='fab fa-snapchat' />
                        </Link>
                        <Link
                            class='social-icon-link Spotify'
                            to='/'
                            target='_blank'
                            aria-label='Spotify'>
                            <i class='fab fa-spotify' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;