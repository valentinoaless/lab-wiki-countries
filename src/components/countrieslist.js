import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import countries from '../countries.json';
import CountryDetails from './countrydetails';

const CountriesList = () => {



    const Countries = () => {
        return countries.map(country => {
            return (
            <Link to={`/country/${country.name.common}`}><a className="list-group-item list-group-item-action">{country.flag} &nbsp;&nbsp;&nbsp; {country.name.common}</a></Link>
            )
        })
    }

    return (
        <div>
            <div className="col-12" style={{display: "flex"}} >
                <div className="list-group col-6" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                <Countries />
                </div>
                <div className="col-6">
                <Switch>
                    <Route exact path='/country/:name' render={(props) => <CountryDetails {...props}/>}/>
                </Switch>
                </div>
            </div>
        </div>
    );
};

export default CountriesList;