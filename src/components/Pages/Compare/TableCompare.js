import React from 'react';
import './TableCompare.css'; // این خط را اضافه کنید تا CSS مربوطه بارگذاری شود
import ContextTable from './ContextTable';

function TableCompare() {
  const columnHeaders = [
    'IL-1a', 'IL-1b', 'IL-2', 'IL-3', 'IL-4', 'IL-5', 'IL-6', 'IL-7', 'IL-8', 'IL-9', 'IL-10',
    'IL-12p70', 'IL-13', 'IL-15', 'IL-16', 'IL-17A', 'IL-18',
    'IL-20', 'IL-21', 'IL-22', 'IL-23', 'IL-27', 'IL-31', 'IL-34', 'IL-37',
    'G-CSF', 'M-CSF', 'GM-CSF', 'IFNa', 'IFNg', 'TNFa', 'TNFb', 'TSLP', 'LIF', 'MIF',
    'CXCL1(Gro-a)', 'CXCL2(MIP-2a)', 'CXCL6(GCP-2)', 'CXCL9(MIG)', 'CXCL10(IP-10)',
    'CXCL11(I-TAC)', 'CX3CL1(Fractalkine)', 'Eotaxin', 'Eotaxin-2', 'Eotaxin-3', 'BLC',
    'ENA-78', '', '', ''
  ];

  const rowHeaders = ['BiolegendPlex x8   LHC0009M', ' Bio-Rad Luminex x8   PHH01250M',
     ' Bio-Rad Luminex x8   PHH01250M', ' Procartaplex x16   PHH01250M'];
  const rowData = [
    ['*', '*', '*', 'IL-3', 'IL-4', 'IL-5', '*', 'IL-7', 'IL-8', 'IL-9', 'IL-10', 'IL-12p70',
      'IL-13', 'IL-15', '*', '*', '*', 'IL-18', 'IL-20', 'IL-21', 'IL-22', 'IL-23',
      'IL-27', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*',
      'Eotaxin', 'Eotaxin-2', 'Eotaxin-3', 'BLC', 'ENA-78', '*', '*', '*',"*","*"
    ],
    ['*', '*', '*', 'IL-3', 'IL-4', 'IL-5', '*', 'IL-7', 'IL-8', 'IL-9', 'IL-10', 'IL-12p70',
      'IL-13', 'IL-15', '*', '*', '*', 'IL-18', 'IL-20', 'IL-21', 'IL-22', 'IL-23',
      'IL-27', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*',
      'Eotaxin', 'Eotaxin-2', 'Eotaxin-3', 'BLC', 'ENA-78', '*', '*', '*',"*","*"
    ],
    ['*', '*', '*', 'IL-3', 'IL-4', 'IL-5', '*', 'IL-7', 'IL-8', 'IL-9', 'IL-10', 'IL-12p70',
      'IL-13', 'IL-15', '*', '*', '*', 'IL-18', 'IL-20', 'IL-21', 'IL-22', 'IL-23',
      'IL-27', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*',
      'Eotaxin', 'Eotaxin-2', 'Eotaxin-3', 'BLC', 'ENA-78', '*', '*', '*',"*","*"
    ],
    ['*', '*', '*', 'IL-3', 'IL-4', 'IL-5', '*', 'IL-7', 'IL-8', 'IL-9', 'IL-10', 'IL-12p70',
      'IL-13', 'IL-15', '*', '*', '*', 'IL-18', 'IL-20', 'IL-21', 'IL-22', 'IL-23',
      'IL-27', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*', '*',
      'Eotaxin', 'Eotaxin-2', 'Eotaxin-3', 'BLC', 'ENA-78', '*', '*', '*',"*","*"
    ],
  ];

  const splitTableData = (columnHeaders, rowHeaders, rowData, maxColumns) => {
    const tables = [];
    for (let i = 0; i < columnHeaders.length; i += maxColumns) {
      const slicedColumnHeaders = columnHeaders.slice(i, i + maxColumns);
      const slicedRowData = rowData.map(row => row.slice(i, i + maxColumns));
      tables.push({ columnHeaders: slicedColumnHeaders, rowHeaders, rowData: slicedRowData });
    }
    return tables;
  };

  const tables = splitTableData(columnHeaders, rowHeaders, rowData, Math.ceil(columnHeaders.length / 2));

  let currentColumnIndex = 1; // متغیر برای نگه‌داشتن شماره‌ی جاری ستون

  const renderTable = ({ columnHeaders, rowHeaders, rowData }) => (
    <table className="compare-table">
      <thead>
        <tr>
          <th></th>
          {columnHeaders.map((header, index) => (
            <td key={index}>
              <div style={{color:'green',fontSize:'10px'}}>{currentColumnIndex++}</div>
              <div>{header}</div>
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th style={{ borderRight: "1px solid black", padding: "0 4px" }}>
              {rowHeaders[rowIndex]}
            </th>
            {row.map((data, dataIndex) => (
              <td key={dataIndex} className="data-cell">{data}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      {tables.map((table, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {renderTable(table)}
        </div>
      ))}




    </>
  );
}

export default TableCompare;
