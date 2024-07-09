import React, { useEffect } from 'react';
import { Input, Ripple, initMDB } from 'mdb-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import './SearchForm.css';

const SearchForm = () => {
  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  return (
    <>
      <div className="container pt-5 mt-5">
        <div className="row justify-content-center">
          <div className="col-md-11">
            <div className="input-group mb-2">
              <div className="dropdown border-0">
                <select className="form-select" aria-label="Category select">
                  <option value="">Multiplex</option>
                  <option value="1">Instruments</option>
                  <option value="2">Knowledge Hub</option>
                  <option value="3">Accessories</option>
                </select>
              </div>
              <div className="form-outline" data-mdb-input-init>
                <input type="search" id="form1" className="form-control" />
                <label className="form-label" htmlFor="form1">Search</label>
              </div>
              <button type="button" className="btn btn-blue" data-mdb-ripple-init>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='item_se'>
        <ul>
          <li>
            <a>
              <i className='fa fa-search'></i>
              happy father's day
            </a>
          </li>
          <li>
            <a>
              <i className='fa fa-search'></i>
              texture
            </a>
          </li>
          <li>
            <a>
              <i className='fa fa-search'></i>
              gif
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SearchForm;
