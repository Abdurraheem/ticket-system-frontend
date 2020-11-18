
import Dashboard from "views/Dashboard.jsx";
import TableList from "views/TableList.jsx";
import AllowedActions from "./assets/api/getAllowedActions.jsx";

const dashboardRoutes = AllowedActions().data.user.Pages;
console.log(dashboardRoutes);

export const route = dashboardRoutes.map((route) => {
  console.log("Routes are",route);
})
export default dashboardRoutes;


