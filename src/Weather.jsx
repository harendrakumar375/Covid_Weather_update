import React, { useEffect, useState } from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Weather=()=>{

  const [search, setsearch]=useState("mumbai");
  const [city, setcity]=useState([]);

  useEffect(()=>{
    const setapi=async () =>{
      const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=802787c761980a14602ea028deae94b1`);
      const response= await res.json();
      console.log(response);
      setcity(response.main);
    };
    setapi();
  },[search])

  return(
  <>
  <div className="weather">
  <div className="box">
    <div className="inputdata">
    <h2 className="heading">Weather Report</h2>
      <input 
      className="inputfield"
      type="search"
      placeholder="enter city name"
      value={search}
      onChange={(event)=>{
      setsearch(event.target.value)
      }
      }
      />
       </div>

      { !city ? (<p className="errormsg">No Data Found</p>) : 
      (
        <div>
        <div className="info">
        <h2 className="location">
        <i className="fa fa-street-view" aria-hidden="true"></i> {search}
        </h2>
      <h2 className="temp">{city.temp} Cel</h2>

      <h3 className="tempmin_max">min={city.temp_min} Cel | max={city.temp_max} Cel</h3>
      </div>
      
      </div>
      )}

      
     
      </div>
      </div>
      
    </>
  );
 
}

export default Weather;
