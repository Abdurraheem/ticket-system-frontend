import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutUser } from  "../../_actions/user_actions";

import axios from 'axios';
import { USER_SERVER } from "../../Config";
import UserCard from "components/UserCard/UserCard";

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
          <NavItem eventKey={3} href="#" onClick={handleClick}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  
}

export default AdminNavbarLinks;
