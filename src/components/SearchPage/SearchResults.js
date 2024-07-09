import React, { useState, useEffect } from 'react';
import './SearchResult.css';
import saveIcon from './../../assets/Images/icon/save_icon.png';
import savedIcon from './../../assets/Images/icon/save_icon_blue.png';

const SearchResults = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [savedItems, setSavedItems] = useState([]);
  const [activeRow, setActiveRow] = useState(null);
  const [isButtonSaved, setIsButtonSaved] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // صفحه فعلی
  const [perPage] = useState(5); // تعداد آیتم‌ها در هر صفحه

  useEffect(() => {
    // Fetch the JSON data
    fetch('/data/searchResults.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  const handleToggle = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSave = (index, item) => {
    const newSavedItems = [...savedItems, index];
    setSavedItems(newSavedItems);
  };

  const handleSaveClick = (index) => {
    if (activeRow === index) {
      setActiveRow(null);
    } else {
      setActiveRow(index);
    }
    setIsButtonSaved(!isButtonSaved);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  // محاسبه تعداد کل صفحات بر اساس تعداد کل آیتم‌ها و تعداد آیتم‌ها در هر صفحه
  const totalPages = Math.ceil(data.length / perPage);

  // تقسیم داده‌ها به صفحات بر اساس صفحه فعلی و تعداد آیتم‌ها در هر صفحه
  const paginatedData = chunkArray(data, perPage);
  const currentData = paginatedData[currentPage - 1];

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {currentData.map((item, index) => {
        const entries = Object.entries(item);
        const initialEntries = entries.slice(0, -9);
        const additionalEntries = entries.slice(-9);
        const dataIndex = (currentPage - 1) * perPage + index + 1; // شماره‌گذاری مطابق با صفحه

        const isExpanded = expandedRows[dataIndex - 1];
        const isSaved = savedItems.includes(dataIndex - 1);

        return (
          <div className="result-wrapper" key={dataIndex}>

            <table key={dataIndex} className="result_tb">
              <caption style={{ captionSide: 'top' }}>
                <span className="result-number">{dataIndex}</span>
                <b style={{ color: '#7d1d8d' }}>{item.title}</b>
                <button
                  onClick={() => handleSave(dataIndex - 1, item)}
                  className="save-button"
                >
                  <img
                    src={activeRow === dataIndex - 1 && isButtonSaved ? savedIcon : saveIcon}
                    alt="Save Icon"
                    className="save-icon"
                    onClick={() => handleSaveClick(dataIndex - 1)}
                  />
                </button>
              </caption>
              <tbody>
                {chunkArray(initialEntries, 3).map((chunk, rowIndex) => (
                  <tr key={rowIndex}>
                    {chunk.map(([key, value], cellIndex) => (
                      <React.Fragment key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </React.Fragment>
                    ))}
                  </tr>
                ))}
                {isExpanded &&
                  chunkArray(additionalEntries, 3).map((chunk, rowIndex) => (
                    <tr key={`expanded-${rowIndex}`}>
                      {chunk.map(([key, value], cellIndex) => (
                        <React.Fragment key={key}>
                          <th>{key}</th>
                          <td>{value}</td>
                        </React.Fragment>
                      ))}
                    </tr>
                  ))}
                <tr>
                  <td colSpan="6">
                    <button className='show_detail' onClick={() => handleToggle(dataIndex - 1)}>
                      {isExpanded ? 'Hide Details' : 'Show Details'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
