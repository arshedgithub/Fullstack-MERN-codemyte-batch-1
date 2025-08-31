import React, { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState('');
  const scrollRefs = useRef({});

  const groupForecastByDay = (forecastData) => {
    const grouped = {};
    forecastData.forEach(item => {
      const date = new Date(item.dt * 1000).toDateString();
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(item);
    });
    return Object.values(grouped);
  };

  const formatTime = (dtTxt) => {
    return new Date(dtTxt).toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true
    });
  };

  const scrollCards = (direction, dayIndex) => {
    const container = scrollRefs.current[dayIndex];
    if (container) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      console.log(err.response.data);
      setError('City not found!');
      setWeather(null);
    }
  };

  const fetchHourlyWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      );
      setForecast(response.data.list);
      setError('');
    } catch (err) {
      console.log(err.response.data);
      setError('City not found!');
      setWeather(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
      fetchHourlyWeather();
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-box">
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.weather[0].main} - {weather.weather[0].description}</p>
          <h3>{weather.main.temp} °C</h3>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast-container">
          <h2>5-Day Forecast</h2>
                     {groupForecastByDay(forecast).map((dayForecast, dayIndex) => (
             <div key={dayIndex} className="day-row">
               <h3 className="day-header">
                 {new Date(dayForecast[0].dt * 1000).toLocaleDateString('en-US', {
                   weekday: 'long',
                   month: 'short',
                   day: 'numeric'
                 })}
               </h3>
               <div className="forecast-cards-container">
                 <button 
                   className="scroll-indicator scroll-left"
                   onClick={() => scrollCards('left', dayIndex)}
                   aria-label="Scroll left"
                 >
                   <svg viewBox="0 0 24 24">
                     <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                   </svg>
                 </button>
                                  <div 
                   className="forecast-cards"
                   ref={el => scrollRefs.current[dayIndex] = el}
                 >
                   {dayForecast.map((f, index) => (
                     <div key={index} className="forecast-card">
                       <div className="time">{formatTime(f.dt_txt)}</div>
                       <div className="weather-icon">
                         <img 
                           src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
                           alt={f.weather[0].description}
                         />
                       </div>
                       <div className="temp-range">
                         <span className="temp-max">{Math.round(f.main.temp_max - 273.15)}°</span>
                         <span className="temp-min">{Math.round(f.main.temp_min - 273.15)}°</span>
                       </div>
                       <div className="weather-desc">{f.weather[0].description}</div>
                       <div className="weather-details">
                         <div className="detail-item">
                           <span className="label">Wind:</span>
                           <span className="value">{f.wind.speed} m/s</span>
                         </div>
                         <div className="detail-item">
                           <span className="label">Pressure:</span>
                           <span className="value">{f.main.pressure} hPa</span>
                         </div>
                         {f.rain && (
                           <div className="detail-item">
                             <span className="label">Rain:</span>
                             <span className="value">{f.rain['3h']} mm</span>
                           </div>
                         )}
                       </div>
                     </div>
                   ))}
                 </div>
                 <button 
                   className="scroll-indicator scroll-right"
                   onClick={() => scrollCards('right', dayIndex)}
                   aria-label="Scroll right"
                 >
                   <svg viewBox="0 0 24 24">
                     <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
                   </svg>
                 </button>
               </div>
             </div>
           ))}
        </div>
      )}
    </div>
  );
}

export default App;
