import React, { useState } from 'react';
import SearchBox from './SearchBox';
import WeatherBox from './WeatherBox';

export default function App() {
    const [city, setCity] = useState("");
    const [beach, setBeach] = useState("");

    return (
        <div>
            <SearchBox 
                onCitySubmit={setCity}
                onBeachSelect={setBeach} 
            />
            {city && beach && <WeatherBox city={city} beach={beach} />}
        </div>
    );
}
