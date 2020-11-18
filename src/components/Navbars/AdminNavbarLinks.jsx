import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from  "../../_actions/user_actions";

import axios from 'axios';
import { USER_SERVER } from "../../Config";
import UserCard from "components/UserCard/UserCard";
import Avatar from '@material-ui/core/Avatar';
import avatar from "../../assets/img/faces/face-1.jpg"
function AdminNavbarLinks(){

  
const dispatch = useDispatch();
  const handleClick = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        window.location.href = '/';
      } else {
        alert('Log Out Failed')
      }
    });
  };
  
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
       
          <NavDropdown
            eventKey={2}
            title={
              <div className="pull-left">
                  <img 
                      src={avatar} 
                      alt="user pic"
                      width="36px"
                      height="36px"
                      style={{marginBottom:"7px",borderRadius:"20px"}}
                  />
              </div>
            }
            
            
          >
            <MenuItem eventKey={2.1}>Profile</MenuItem>
            
            <MenuItem eventKey={2.5}>Settings</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5} onClick={handleClick}>Log Out</MenuItem>
          </NavDropdown>
          
        </Nav>
      
      </div>
    );
  
}

export default AdminNavbarLinks;
