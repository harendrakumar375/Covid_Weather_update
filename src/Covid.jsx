import React  from "react";


import { useEffect , useState} from "react";

const Covid=()=>{
  const [data, setdata]=useState([]);
  
  

  
    
    async function getdata(){
      try {
      const res= await fetch('https://api.covid19india.org/data.json');
      const actualdata=await res.json();

      setdata(actualdata.statewise);
      
      }
      catch(err){
          
          console.log(err);
      }
      
    }
  useEffect(()=>{
    getdata();
  }, []);

  return(
      <>
      
      <div className="top-div">
          <h1><span>India</span> Covid-19 Dashboard</h1>
      </div>
      
      <div style={{overflow:"auto"}} >
      <table>
          <thead>
              <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Recovered</th>
                  <th>Deaths</th>
                  <th>Active</th>
                  <th>Updated</th>
              </tr>
          </thead>

          <tbody>
          {data.map((CurrE, ind)=>{
              return (
              <tr>
                  <th>{CurrE.state}</th>
                  <td>{CurrE.confirmed}</td>
                  <td>{CurrE.recovered}</td>
                  <td>{CurrE.deaths}</td>
                  <td>{CurrE.active}</td>
                  <td>{CurrE.lastupdatedtime}</td>
              </tr>
              );
          })}
              
          </tbody>

      </table>
      </div>
    
      </>
  )
};

export default Covid;