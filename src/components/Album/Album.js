
import React, { Component } from 'react'
import './Album.css';
import img1 from './../../assets/Images/album2.avif';
import img2 from './../../assets/Images/album1.avif';
import img3 from './../../assets/Images/album3.avif';
import img4 from './../../assets/Images/album4.avif';
import img5 from './../../assets/Images/album5.avif';
import img6 from './../../assets/Images/album6.avif';
import img7 from './../../assets/Images/10.webp';
export default class Album extends Component {


    render() {
        return (
            <>

                <div className='text-center p-5'>
                    <h2>Designers’ faves</h2>
                    <p>Check out what’s getting the most olés on Freepik right now</p>
                </div>

                <div className='container pb-5'>

                    <div className='row'>
                        <div className='col-3'>
                            <img className='w-100 ' src={img6} />
                        </div>
                        <div className='col-3'>
                            <img className='w-100 ' src={img1} />
                        </div>
                        <div className='col-6'>
                            <img className='w-100 ' src={img2} />
                        </div>

                    </div>


                    {/* row2 */}
                    <div className='row pt-5'>
                        <div className='col-6'>
                            <img className='w-100 ' src={img5} />
                        </div>
                        <div className='col-3'>
                            <img className='w-100' src={img3} />
                        </div>
                        <div className='col-3'>
                            <img className='w-100' src={img3} />
                        </div>
                    </div>

                    {/* row3 */}
                    <div className='row pt-5'>
                        <div className='col-3'>
                            <img className='w-100 ' src={img7} />
                        </div>
                        <div className='col-3'>
                            <img className='w-100 ' src={img1} />
                        </div>
                        <div className='col-6'>
                            <img className='w-100 ' src={img4} />
                        </div>

                    </div>
                </div>



            </>
        )
    }
}
