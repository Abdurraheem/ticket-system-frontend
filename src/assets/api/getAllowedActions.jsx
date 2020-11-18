import React, { Component } from "react";
import Dashboard from "../../views/Dashboard.jsx";
import TableList from "../../views/TableList";
import CreateUser from "../../views/ManageUsers/CreateUser";
import ManageUsers from "../../views/ManageUsers/manageUsers";
import BusDetails from "../../views/BusManagement/BusDetails";
import Customers from "../../views/CustomerManagement/Customers";
import BookingDetails from "../../views/BookingManagement/BookingDetails";
import Booking from "../../views/BookingManagement/Booking";
function AllowedActions() {
  return {
    "data": {
      "user": {
        "firstName": "Bob",
        "lastName": "Marley",
        "email": "bob@yahoo.com",
        "Pages": [
          {
            "path": "/dashboard",
            "name": "Dashboard",
            "icon": "pe-7s-graph",
            "component": Dashboard,
            "layout": "/admin",
            "moduleId": 4,
            "modulePageId": 11,
            "actions": [
              {
                "actionId": 32,
                "actionUrl": "capacity",
                "action": "Capacity",
                "roleIsActive": true
              },
              {
                "actionId": 33,
                "actionUrl": "revenue",
                "action": "Revenue",
                "roleIsActive": true
              },
              {
                "actionId": 34,
                "actionUrl": "errors",
                "action": "Errors",
                "roleIsActive": true
              },
              {
                "actionId": 35,
                "actionUrl": "followers",
                "action": "Followers",
                "roleIsActive": true
              },
              {
                "actionId": 36,
                "actionUrl": "users_behavior",
                "action": "Users Behavior",
                "roleIsActive": true
              },
              {
                "actionId": 37,
                "actionUrl": "email_statistics",
                "action": "Email Statistics",
                "roleIsActive": true
              },
              {
                "actionId": 38,
                "actionUrl": "sales",
                "action": "Sales",
                "roleIsActive": true
              },
              {
                "actionId": 39,
                "actionUrl": "tasks",
                "action": "Tasks",
                "roleIsActive": true
              }
            ]
          },


          {
            "path": "/users",
            "name": "User Management",
            "icon": "pe-7s-user",
            "component": ManageUsers,
            "layout": "/admin",
            "actions": [
              {
                "actionId": 2,
                "actionUrl": "create-role",
                "action": "Create Role",
                "roleIsActive": true
              },
              {
                "actionId": 2,
                "actionUrl": "delete-role",
                "action": "Delete Role",
                "roleIsActive": true
              }
            ]
          },
          
          {
            "path": "/bus_details",
            "name": "Bus Management",
            "icon": "pe-7s-note2",
            "component": BusDetails,
            "layout": "/admin",
            "actions": [
              {
                "actionId": 2,
                "actionUrl": "create-role",
                "action": "Create Role",
                "roleIsActive": true
              },
              {
                "actionId": 2,
                "actionUrl": "delete-role",
                "action": "Delete Role",
                "roleIsActive": true
              }
            ]
          },
          {
            "path": "/booking_details",
            "name": "Booking Details",
            "icon": "pe-7s-ticket",
            "component": BookingDetails,
            "layout": "/admin",
            "actions": [
              {
                "actionId": 2,
                "actionUrl": "create-role",
                "action": "Create Role",
                "roleIsActive": true
              },
              {
                "actionId": 2,
                "actionUrl": "delete-role",
                "action": "Delete Role",
                "roleIsActive": true
              }
            ]
          },

          {
            "path": "/customers",
            "name": "Customers",
            "icon": "pe-7s-users",
            "component": Customers,
            "layout": "/admin",
            "actions": [
              {
                "actionId": 2,
                "actionUrl": "create-role",
                "action": "Create Role",
                "roleIsActive": true
              },
              {
                "actionId": 2,
                "actionUrl": "delete-role",
                "action": "Delete Role",
                "roleIsActive": true
              }
            ]
          },
         
          {
            "path": "/create_user",
            "name": "Create User",
            "icon": "pe-7s-clock",
            "component": CreateUser,
            "layout": "/admin",
            "actions": [
              {
                "actionId": 2,
                "actionUrl": "create-role",
                "action": "Create Role",
                "roleIsActive": true
              },
              {
                "actionId": 2,
                "actionUrl": "delete-role",
                "action": "Delete Role",
                "roleIsActive": true
              }
            ]
          },





        ]
      }
    }
  }
}

export default AllowedActions;
