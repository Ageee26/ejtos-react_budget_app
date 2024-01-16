import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const currencyNameMap = {
        '$': 'Dollar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Rupee',
    };

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    return (
        <div className="dropdown">
            <button className="btn btn-success dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ marginTop:'5px' }}>
                Currency ({newCurrency} {currencyNameMap[newCurrency]})
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button className="dropdown-item" value='$' onClick={handleCurrencyChange}>$ Dollar</button>
                <button className="dropdown-item" value='£' onClick={handleCurrencyChange}>£ Pound</button>
                <button className="dropdown-item" value='€' onClick={handleCurrencyChange}>€ Euro</button>
                <button className="dropdown-item" value='₹' onClick={handleCurrencyChange}>₹ Rupee</button>
            </div>
        </div>
    );
};

export default Currency;