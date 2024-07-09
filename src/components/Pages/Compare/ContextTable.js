import React from 'react';
import './ContextTable.css'; // برای بارگذاری CSS مربوطه
import Storage from './Storage';

const ContextTable = () => {
  return (
    <>
    
      <div className='row'>
        <div className='col-6'>
        <table className='content'>
        <thead>
          <tr>
            <th></th>
            <th>LHC0009M</th>
            <th>PHH01250M</th>
            <th>PHH01250M</th>
            <th>PHH01250M</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Human Standard Mix</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Lyophilized Capture Bead Mix inside plate</th>
            <td>*</td>
            <td>Yes</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Loose Precoated Beads</th>
            <td>*</td>
            <td>*</td>
            <td>Yes</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Biotinylated Detection Antibody Mix (1X)</th>
            <td>*</td>
            <td>*</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Human Control-High</th>
            <td>Yes</td>
            <td>*</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Control (1)</th>
            <td>*</td>
            <td>Yes</td>
            <td>*</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Control (2)</th>
            <td>Yes</td>
            <td>*</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Wash Buffer</th>
            <td>*</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
          <tr>
            <th>Streptavidin-PE</th>
            <td>Yes</td>
            <td>*</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Universal Assay Buffer</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>*</td>
          </tr>
          <tr>
            <th>8-tube strip</th>
            <td>Yes</td>
            <td>Yes</td>
            <td>*</td>
            <td>*</td>
          </tr>
          <tr>
            <th>Adhesive film</th>
            <td>*</td>
            <td>*</td>
            <td>Yes</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
        </div>

        <div className='col-6'>
          <Storage/>
        </div>
      </div>
    </>
  );
};

export default ContextTable;
