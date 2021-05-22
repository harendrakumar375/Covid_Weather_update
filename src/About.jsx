import React, { useEffect, useState } from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const About=()=>{

  const [search, setsearch]=useState("Mumbai");
  const [city, setcity]=useState([]);

  useEffect(()=>{
    const setapi=async () =>{
      const res=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=802787c761980a14602ea028deae94b1`);
      const response= await res.json();
      console.log(response);
      setcity(response.main);
    };
    setapi();
  },[search])

  return(
  <>
  <div className="box">
    <div className="inputdata">
    <h1 className="heading">Weather Report</h1>
      <input 
      className="inputfield"
      type="search"
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
        <i class="fa fa-street-view" aria-hidden="true"></i> {search}
        </h2>
      <h1 className="temp">{city.temp} </h1>

      <h3 className="tempmin_max">min={city.temp_min} | max={city.temp_max}</h3>
      </div>
      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
      </div>
      )}

      
     
      </div>
      
    </>
  );
 
}

export default About;
