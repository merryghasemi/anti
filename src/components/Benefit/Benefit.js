
import React, { Component } from 'react'
import icon1 from './../../assets/Images/icon-post1.webp';

import { Container } from 'react-bootstrap';

import './Benefit.css';

export default class Benefit extends Component {


    render() {
        return (
            <>
                <Container className='pt-5 pb-5 benefit'>
                    <div className='text-center pt-5 pb-5'>

                        <b>Benefit</b>
                        <h2>Let’s make your ideas break through</h2>
                        <p>Find the most up-to-date vocabulary of images, videos, signs, symbols, and fonts</p>

                    </div>

                    <div className='row'>
                        <div className='col-3'>
                            <img src={icon1} />
                            <h2>Best quality or nothing</h2>
                            <p>Download scroll-stopping images of the highest quality to make professional designs.</p>
                        </div>
                        <div className='col-3'>
                            <img src={icon1} />
                            <h2>Ready-to-use everything</h2>
                            <p>Download scroll-stopping images of the highest quality to make professional designs.</p>
                        </div>
                        <div className='col-3'>
                            <img src={icon1} />
                            <h2>Fresh content every day</h2>
                            <p>Download scroll-stopping images of the highest quality to make professional designs.</p>
                        </div>
                        <div className='col-3'>
                            <img src={icon1} />
                            <h2>If you can think of it, you can find it</h2>
                            <p>Download scroll-stopping images of the highest quality to make professional designs.</p>
                        </div>
                    </div>
                </Container>



            </>
        )
    }
}
