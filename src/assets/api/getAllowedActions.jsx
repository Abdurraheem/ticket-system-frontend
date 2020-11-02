import React, { Component } from "react";
import Dashboard from "../../views/Dashboard.jsx";

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
        ]
      }
    }
  }
}

export default AllowedActions;
