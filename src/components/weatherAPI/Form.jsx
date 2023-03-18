import { useState } from 'react';
import styles from './Form.module.css';

import { WeatherContext, WeatherProvider } from "../components/WeatherAPI";


const Form = ({ submitGeoLocation }) => {
    const [geoLocation, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!geoLocation || geoLocation === '') {
            return;
        }
        else {
            submitGeoLocation(geoLocation);
        };
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                aria-label="geoLocation"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                value={geoLocation}
                onChange={e => setLocation(e.target.value)}
                required
            />

            <button type="submit" className={styles.button} onClick={handleSubmit}>
                SEARCH
            </button>
            <WeatherContext.Provider
                value={{ temperature, error, loading, getWeatherData }}
            >
                {children}
            </WeatherContext.Provider>
        </form>


    );
};

export default Form;
