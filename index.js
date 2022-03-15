// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from './practice';

const [honda,tesla] = cars;

/* When destructuring arrays, you can name the varaibles anything you want.
   When destructuring objects, you have to match the property names.
   You can change the property name by using const {propertyname: newPropertyname} = object
   
   You can set default values(if there isn't already a value) by using const {property = defaultValue} = object

   You can also destructure nested objects/arrays as shown below*/

const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed}} = honda;

const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed: teslaTopSpeed}} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
