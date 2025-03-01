/* eslint-disable no-unused-vars */
// import { useState } from "react";
// import Colors from './Colors.json';
import './ColorsTable.css';

const ColorsTable = ({ colors}) => {

  /* const [colorInfo, setColorInfo] = useState(Colors);

  const getInfo = () => {
    return colorInfo;
  }

I realized during the end of this project that it was better to just call the colors directly as a prop.
getInfo was returning the same state value every time. If I clicked a color it was just showing all the colors each time.
getInfo didn't modify or transform the data, it was just returning it
  console.log('Info', getInfo());
  */

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
        {colors.map((color) => (
            <tr key={color.key}>
              <td>{color.name}</td>
              <td>{color.hex}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorsTable;
