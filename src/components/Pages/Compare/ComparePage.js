import React, { useState } from 'react';
import TableCompare from './TableCompare';
import ContextTable from './ContextTable';
import './ComparePage.css';
import Navigation from '../../Navbar/Navigation';
import SearchForm from '../../Search/SearchForm';
import Specifications from './Specifications';



const ComparePage = () => {
  const [activeTab, setActiveTab] = useState('tableCompare');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>

      <div className=' mb-5 pb-5 navbar_se ' style={{ background: '#437EEB', height: '20vh' }}>
        <Navigation />
      </div>
      <div className='container mt-5 pt-5'>
        <SearchForm />

      </div>

      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === 'tableCompare' ? 'active' : ''}`}
          onClick={() => handleTabClick('tableCompare')}
        >
          Table Compare
        </button>
        <button
          className={`tab-button ${activeTab === 'contextTable' ? 'active' : ''}`}
          onClick={() => handleTabClick('contextTable')}
        >
          Context Table
        </button>

        <button
          className={`tab-button ${activeTab === 'specifications' ? 'active' : ''}`}
          onClick={() => handleTabClick('specifications')}
        >
         Specifications
        </button>


      </div>

      <div className="tab-content">
        {activeTab === 'tableCompare' && <TableCompare />}
        {activeTab === 'contextTable' && <ContextTable />}
        {activeTab === 'specifications' && <Specifications />}
       
      </div>
    </>
  );
}

export default ComparePage;
