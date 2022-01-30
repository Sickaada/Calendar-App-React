import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const handleChange = (e) => {
  console.log(e.target);
};
const options = [
  'one', 'two', 'three',
];
const defaultOption = options[0];

function Availabletime() {
  console.log('sdfsdf');
  return (
    <div>
      <Dropdown options={options} onChange={handleChange} value={defaultOption} placeholder="Select an option" />
      ;

      <h1>asdas</h1>
    </div>
  );
}

export default Availabletime;
