import React, { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filters.css';

const Dropdowns = () => {
    const [selectedItems, setSelectedItems] = useState({
        group1: null,
        group2: null,
        group3: null,
    });

    const handleSelect = (group, eventKey) => {
        setSelectedItems(prevState => ({
            ...prevState,
            [group]: eventKey,
        }));
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-group">
                <DropdownButton
                    id="dropdown-group1"
                    className="dropdown-button-custom"
                    title={selectedItems.group1 ? selectedItems.group1 : "Select an option "}
                    onSelect={(eventKey) => handleSelect('group1', eventKey)}
                >
                    <Dropdown.Item eventKey="Option 1-1" className="dropdown-item-custom">Option 1-1</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 1-2" className="dropdown-item-custom">Option 1-2</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 1-3" className="dropdown-item-custom">Option 1-3</Dropdown.Item>
                </DropdownButton>
                {selectedItems.group1 && <p>Selected Item {selectedItems.group1}</p>}
            </div>
            <div className="dropdown-group">
                <DropdownButton
                    id="dropdown-group2"
                    className="dropdown-button-custom"
                    title={selectedItems.group2 ? selectedItems.group2 : "Select an option "}
                    onSelect={(eventKey) => handleSelect('group2', eventKey)}
                >
                    <Dropdown.Item eventKey="Option 2-1" className="dropdown-item-custom">Option 2-1</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 2-2" className="dropdown-item-custom">Option 2-2</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 2-3" className="dropdown-item-custom">Option 2-3</Dropdown.Item>
                </DropdownButton>
                {selectedItems.group2 && <p>Selected Item {selectedItems.group2}</p>}
            </div>
            <div className="dropdown-group">
                <DropdownButton
                    id="dropdown-group3"
                    className="dropdown-button-custom"
                    title={selectedItems.group3 ? selectedItems.group3 : "Select an option "}
                    onSelect={(eventKey) => handleSelect('group3', eventKey)}
                >
                    <Dropdown.Item eventKey="Option 3-1" className="dropdown-item-custom">Option 3-1</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 3-2" className="dropdown-item-custom">Option 3-2</Dropdown.Item>
                    <Dropdown.Item eventKey="Option 3-3" className="dropdown-item-custom">Option 3-3</Dropdown.Item>
                </DropdownButton>
                {selectedItems.group3 && <p>Selected Item {selectedItems.group3}</p>}
            </div>
        </div>
    );
};

export default Dropdowns;
