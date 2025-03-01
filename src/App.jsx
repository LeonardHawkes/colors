/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css';
import Colors from './Colors.json'
import ColorsTable from './ColorsTable';

function App() {

  const [toggleFilter, setToggleFilter] = useState(false); //Flag to toggle when to show colors in filter
  const [selectedColors, setSelectedColors] = useState([]); //State to track selected colors
  const [displayedColors, setDisplayedColors] = useState(Colors); //Created this state to show which colors are displayed in the table

  const handleClick = () => {
    setToggleFilter(!toggleFilter)
  };

  const handleColorClick = (color) => {
    let updatedSelection;
    //If a color is already selected, remove it from the selection
    if(selectedColors.includes(color)) {
      updatedSelection = selectedColors.filter((c) => c !== color);
    } else {
      updatedSelection = [...selectedColors, color];
    }
    setSelectedColors(updatedSelection);

    //Update displayedColors based on selection or just show all the colors/Default
    setDisplayedColors(updatedSelection.length > 0 ? updatedSelection : Colors);
  };

  const clearFilter = () => {
    setSelectedColors([]); //Clear the filter
    setDisplayedColors(Colors); //Default
  }

  return (
    <div>
      <button onClick={handleClick}>
        Filter Colors
      </button>
      {toggleFilter && (
        <div>
          <button onClick={clearFilter} disabled={selectedColors.length === 0}>
            Clear filter
          </button>
          <div className='colors-container'>
            {Colors.map((color) => (
              <div
                key={color.key}
                className={`color-box ${selectedColors.includes(color) ? 'selected' : ''}`}
                style={{backgroundColor: color.hex}}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        </div>
      )}
      <ColorsTable colors={displayedColors} />
    </div>
  )
}

export default App
