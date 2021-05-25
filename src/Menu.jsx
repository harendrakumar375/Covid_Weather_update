import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import CloudIcon from '@material-ui/icons/Cloud';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Tooltip from '@material-ui/core/Tooltip';

const Menu=()=>{
    return (
        <>
        <div className="main-div">
        <Tooltip title="Home">
        < NavLink exact activeClassName="active_class" to ="/"><HomeIcon style={{ fontSize:50}}/></ NavLink>
        </Tooltip>
        <Tooltip title="Weather">
        < NavLink exact activeClassName="active_class" to ="/Weather"><CloudIcon style={{fontSize:50}}/></ NavLink >
        </Tooltip>
        <Tooltip title="Covid-19">
        < NavLink exact activeClassName="active_class" to ="/Covid"> <LocalHospitalIcon style={{ fontSize:50}}></LocalHospitalIcon> </ NavLink >
        </Tooltip>
        </div>
        </>
    );
};

export default Menu;