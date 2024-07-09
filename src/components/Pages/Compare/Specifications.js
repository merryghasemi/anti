import React from 'react';
import './Specifications.css';


function Specifications() {
  const specificationsData = [
    { name: 'Product Type', values: ['Multiplex Panel', 'Multiplex Panel', 'Multiplex Panel', 'Multiplex Panel'] },
    { name: 'Quantity', values: ['384 Tests', '384 Tests', '384 Tests', '384 Tests'] },
    { name: 'Species', values: ['Human', 'Human', 'Human', 'Human'] },
    { name: 'Combinability', values: ['Non-combinable', 'Non-combinable', 'Non-combinable', 'Non-combinable'] },
    { name: 'Assay Sensitivity', values: ['See Certificate of Analysis', 'See Certificate of Analysis', 'See Certificate of Analysis', 'See Certificate of Analysis'] },
    { name: 'Assay Range', values: ['See Certificate of Analysis', 'See Certificate of Analysis', 'See Certificate of Analysis', 'See Certificate of Analysis'] },
    { name: 'Format', values: ['Multiplex Kit', 'Multiplex Kit', 'Multiplex Kit', 'Multiplex Kit'] },
    { name: 'For Use With (Equipment)', values: ['FLEXMAP 3 DTM', 'FLEXMAP 3 DTM', 'FLEXMAP 3 DTM', 'FLEXMAP 3 DTM'] },
    { name: 'Interassay CV', values: ['Less than 15%', 'Less than 15%', 'Less than 15%', 'Less than 15%'] },
    { name: 'Intraassay CV', values: ['Less than 15%', 'Less than 15%', 'Less than 15%', 'Less than 15%'] },
    { name: 'Multiplex Size Plex No.', values: ['65', '65', '65', '65'] },
    { name: 'Product Line', values: ['ProcartaPlex™', 'ProcartaPlex™', 'ProcartaPlex™', 'ProcartaPlex™'] },
    { name: 'Sample Type', values: ['Cell Culture Supernatants', 'Cell Culture Supernatants', 'Cell Culture Supernatants', 'Cell Culture Supernatants'] },
    { name: 'Shipping Condition', values: ['Wet Ice', 'Wet Ice', 'Wet Ice', 'Wet Ice'] },
    { name: 'Research Area', values: ['Immunology', 'Immunology', 'Immunology', 'Immunology'] },
  ];

  return (
    <>
      <table className='spacific'>
        <caption>Specifications</caption>
        <tbody>
          {specificationsData.map((spec, index) => (
            <tr key={index}>
              <th>{spec.name}</th>
              {spec.values.map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Specifications;
