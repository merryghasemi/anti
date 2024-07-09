import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './Filters.css'; 

const Filters = () => {
    const [checkboxGroups, setCheckboxGroups] = useState([
        {
            id: 1,
            title: 'Spacies',
            checkboxes: [
                { id: 1, label: 'Checkbox 1', checked: false },
                { id: 2, label: 'Checkbox 2', checked: false },
                { id: 3, label: 'Checkbox 3', checked: false },
                { id: 4, label: 'Checkbox 1', checked: false },
                { id: 5, label: 'Checkbox 2', checked: false },
                { id: 6, label: 'Checkbox 3', checked: false },
            ],
            isOpen: false,
        },
        {
            id: 2,
            title: 'Quntity',
            checkboxes: [
                { id: 7, label: 'Checkbox 4', checked: false },
                { id: 8, label: 'Checkbox 5', checked: false },
                { id: 9, label: 'Checkbox 4', checked: false },
                { id: 10, label: 'Checkbox 5', checked: false },
                { id: 11, label: 'Checkbox 4', checked: false },
                { id: 12, label: 'Checkbox 5', checked: false },
            ],
            isOpen: false,
        },
        {
            id: 3,
            title: 'ProductType',
            checkboxes: [
                { id: 13, label: 'Checkbox 4', checked: false },
                { id: 14, label: 'Checkbox 5', checked: false },
                { id: 15, label: 'Checkbox 4', checked: false },
                { id: 16, label: 'Checkbox 5', checked: false },
                { id: 17, label: 'Checkbox 4', checked: false },
                { id: 18, label: 'Checkbox 5', checked: false },
            ],
            isOpen: false,
        },
    ]);

    const [radioGroup, setRadioGroup] = useState({
        title: 'Application',
        radios: [
            { id: 1, label: 'Radio 1', value: 'radio1' },
            { id: 2, label: 'Radio 2', value: 'radio2' },
            { id: 3, label: 'Radio 3', value: 'radio3' },
            { id: 4, label: 'Radio 1', value: 'radio1' },
            { id: 5, label: 'Radio 2', value: 'radio2' },
            { id: 6, label: 'Radio 3', value: 'radio3' },
        ],
        selected: '',
        isOpen: false,
    });

    const toggleCheckboxGroup = (id) => {
        setCheckboxGroups(
            checkboxGroups.map(group =>
                group.id === id ? { ...group, isOpen: !group.isOpen } : group
            )
        );
    };

    const toggleRadioGroup = () => {
        setRadioGroup({ ...radioGroup, isOpen: !radioGroup.isOpen });
    };

    const handleCheckboxChange = (groupId, checkboxId) => {
        setCheckboxGroups(
            checkboxGroups.map(group => {
                if (group.id === groupId) {
                    return {
                        ...group,
                        checkboxes: group.checkboxes.map(checkbox =>
                            checkbox.id === checkboxId
                                ? { ...checkbox, checked: !checkbox.checked }
                                : checkbox
                        ),
                    };
                }
                return group;
            })
        );
    };

    const handleRadioChange = (value) => {
        setRadioGroup({ ...radioGroup, selected: value });
    };

    return (
        <div className="checkbox-container">
            {checkboxGroups.map(group => (
                <div key={group.id} className="checkbox-group">
                    <div className="checkbox-title" onClick={() => toggleCheckboxGroup(group.id)}>
                        {group.title}
                        <span className="toggle-icon">
                            <FontAwesomeIcon icon={group.isOpen ? faMinus : faPlus} />
                        </span>
                    </div>
                    <div className={`checkboxes ${group.isOpen ? 'show' : ''}`} id={`checkboxes${group.id}`}>
                        {group.checkboxes.map(checkbox => (
                            <label key={checkbox.id}>
                                <input
                                style={{
                                    margin: "0 0.5rem",
                                    transform:"scale(1.5)"
                                }}
                                    type="checkbox"
                                    checked={checkbox.checked}
                                    onChange={() => handleCheckboxChange(group.id, checkbox.id)}
                                />
                                {checkbox.label}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <div className="radio-group">
                <div className="checkbox-title" onClick={toggleRadioGroup}>
                    {radioGroup.title}
                    <span className="toggle-icon">
                        <FontAwesomeIcon icon={radioGroup.isOpen ? faMinus : faPlus} />
                    </span>
                </div>
                <div className={`radios ${radioGroup.isOpen ? 'show' : ''}`} id="radios">
                    {radioGroup.radios.map(radio => (
                        <label key={radio.id}>
                            <input
                                type="radio"
                                name="radioGroup"
                                value={radio.value}
                                checked={radioGroup.selected === radio.value}
                                onChange={() => handleRadioChange(radio.value)}
                            />
                            {radio.label}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Filters;
