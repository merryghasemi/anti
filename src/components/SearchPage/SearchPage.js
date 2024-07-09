import React, { useState } from 'react';

import SearchForm from './../Search/SearchForm';
import SearchResults from './SearchResults';
import Filters from './Filters';
import Navigation from '../Navbar/Navigation';
import Dropdowns from './DropDowns';

function SearchPage() {


    return (
        <>
            <div className=' mb-5 pb-5 navbar_se ' style={{ background: '#437EEB', height: '20vh' }}>
                <Navigation />
            </div>
            <div className='container mt-5 pt-5'>
                <SearchForm />
                <Dropdowns />
                <div className='row mt-5'>
                    <div className='col-3'>
                        <Filters />
                    </div>
                    <div className='col-9'>
                        <SearchResults />
                    </div>

                </div>
            </div>

        </>
    );
}

export default SearchPage;
