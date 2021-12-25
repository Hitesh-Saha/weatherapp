import React, { useEffect, useState } from "react";
import "../css/styles.css";

const Weatherapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("jorhat");
  const [date, setDate] = useState({
    day:"",
    date:"",
    month:"",
    year:"",
    time:""
  });
  // const [weatherStatus, setWeatherStatus] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c3e0dd0776de2807c10eb563ba11980b`;
      const response = await fetch(url);
      const res = await response.json();
      // const result = res.weather[0].main; 
      setCity(res.main);
      // console.log(result);
      // console.log(res.weather[0].main);
      // const status = res.weather;
      // console.log(status[0].main);
      // status[0].main === "Clouds" ? setWeatherStatus(<div><i className="fas fa-cloud"></i> <h3>Cloudy</h3></div>) : setWeatherStatus(<div><i className="fas fa-sun" ></i> <h3>Sunny</h3></div>);
    };

    fetchApi();

    const currentday = () => {
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      let mon = new Array(12);
      mon[0] = "January";
      mon[1] = "February";
      mon[2] = "March";
      mon[3] = "April";
      mon[4] = "May";
      mon[5] = "June";
      mon[6] = "July";
      mon[7] = "August";
      mon[8] = "September";
      mon[9] = "October";
      mon[10] = "November";
      mon[11] = "December";
  
      let time = new Date();
      setDate({
        day: weekday[time.getDay()],
        date: time.getDate(),
        month: mon[time.getMonth()],
        year: time.getFullYear(),
        time: time.toLocaleTimeString()
      });
    };

    currentday();
  }, [search]);

 

  return (
    <>
      <div className="box">
        <div className="searchfield">
          <div className="brand">
            <h1>ForeXast</h1>
          </div>
          <input
            type="search"
            placeholder="Enter city"
            className="inputfield"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <h5 className="invalid-data">No Data Found</h5>
        ) : (
          <div className="info">
            <div className="desc">
              {/* {weatherStatus} */}
              cloudy
            </div>
            <h2 className="location">
              <i className="far fa-compass"></i>
              &nbsp; {search}
            </h2>
            <div className="date">
              {date.day}
              <br />{date.date} {date.month} {date.year}
            </div>
            <div className="time">{date.time}</div>
            <div className="temp">{city.temp} °C</div>
            <div className="temp-max-min">
              <h4>
                Min: {city.temp_min} °C | Max: {city.temp_max} °C
              </h4>
            </div>
            <div className="humidity">
              <h5>Humidity: {city.humidity} %</h5>
            </div>
            <div className="pressure">
              <h5>Pressure: {city.pressure} hPa</h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weatherapp;
