import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryDetails = (props) => {

    let countryObj = countries.filter(country => country.name.common === props.match.params.name)[0];
    
    const Borders = () => {
        return countryObj.borders.map(border => {
            let countryBordering = countries.filter(country => country.cca3 === border) 
            console.log(countryBordering[0].name.common);
            return <li><Link to={`/country/${countryBordering[0].name.common}`}>{countryBordering[0].name.common}</Link></li>
        })
    }

    return (
        <div className="col-7">
          <h1>{countryObj.name.common}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{width: '30%'}}>Capital</td>
                <td>{countryObj.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{countryObj.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    <Borders />
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    );
};

export default CountryDetails;