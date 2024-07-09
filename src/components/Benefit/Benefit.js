import React, { Component } from 'react';
import img1 from './../../assets/Images/retouch.jpg';
import img2 from './../../assets/Images/reimagine-bg.jpg';

import { Container } from 'react-bootstrap';
import './Benefit.css';

export default class Benefit extends Component {
  render() {
    return (
      <>
        <Container className='pt-5 pb-5 benefit'>
          <div className='row'>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <img src={img1} className="card-img-top" alt="Tool 1" />
                <div className="card-body">
                  <h5 className="card-title">Multiplex</h5>
                  <p className="card-text">Description for tMultiplex.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <img src={img2} className="card-img-top" alt="Tool 2" />
                <div className="card-body">
                  <h5 className="card-title">Instruments</h5>
                  <p className="card-text">Description for Instruments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Tool 3" />
                <div className="card-body">
                  <h5 className="card-title">Knowledge Hub</h5>
                  <p className="card-text">Description for Knowledge Hub.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Tool 4" />
                <div className="card-body">
                  <h5 className="card-title">Accessories</h5>
                  <p className="card-text">Description for Accessories.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}
