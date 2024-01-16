import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        })
    }

    return (
        <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency ({newCurrency})
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <button class="dropdown-item" value='$' onClick={handleCurrencyChange}>$ Dollar</button>
                <button class="dropdown-item" value='£' onClick={handleCurrencyChange}>£ Pound</button>
                <button class="dropdown-item" value='€' onClick={handleCurrencyChange}>€ Euro</button>
                <button class="dropdown-item" value='₹' onClick={handleCurrencyChange}>₹ Rupee</button>
            </div>
        </div>
    );
};

export default Currency;