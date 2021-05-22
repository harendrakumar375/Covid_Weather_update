import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const Menu=()=>{
    return (
        <>
        <div className="main-div">
        < NavLink exact activeClassName="active_class" to ="/About"><HomeIcon style={{margin:14 , fontSize:50}}/></ NavLink >
        <br/>
        < NavLink exact activeClassName="active_class" to ="/Contact"> contact </ NavLink >
        </div>
        </>
    );
};

export default Menu;