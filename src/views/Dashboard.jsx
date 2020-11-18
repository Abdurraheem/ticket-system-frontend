import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {BsPeopleFill} from "react-icons/bs";
import {FaBus} from "react-icons/fa";
import {FcPlanner} from "react-icons/fc";
import {FcAutomotive} from "react-icons/fc";
import {MdAirlineSeatReclineNormal} from "react-icons/md";
import {FcCheckmark} from "react-icons/fc"
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionsArray: []
    };
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  isActionAllowed = (actionUrl = "") => {
    return this.state.actionsArray.indexOf(actionUrl) >= 0 ? true : false;
  };

  getActionList = () => {
    let actionsArray = [];
    let allowedActions = this.props.allowedActions;
    allowedActions.forEach(element => {
      if (element.roleIsActive) {
        actionsArray.push(element.actionUrl);
      }
    });
    this.setState({ actionsArray });
  };

  componentWillMount() {
    this.getActionList();
  }

  render() {    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {this.isActionAllowed("capacity") && (
              <Col lg={3} sm={3}>
                <StatsCard
                  bigIcon={<BsPeopleFill/>}
                  statsText="Customers"
                  statsValue="4"
                  color="#321fdb"
                  //statsIcon={<i className="fa fa-refresh" />}
                  //statsIconText="Updated now"
                />
              </Col>
            )}
             {this.isActionAllowed("revenue") && 
            <Col lg={3} sm={3}>
              <StatsCard
                bigIcon={<FcAutomotive/>}
                statsText="Busses"
                statsValue="2"
                color="#3399ff"
                // statsIcon={<i className="fa fa-calendar-o" />}
                // statsIconText="Last day"
              />
            </Col>
             }
             {this.isActionAllowed("errors") && 
            <Col lg={3} sm={3}>
              <StatsCard
                bigIcon={<FcPlanner/>}
                statsText="Bookings"
                statsValue="2"
                color="#f9b115"
                // statsIcon={<i className="fa fa-clock-o" />}
                // statsIconText="In the last hour"
              />
            </Col>
             }

              {this.isActionAllowed("followers") && 
              <Col lg={3} sm={3}>
                <StatsCard
                bigIcon={<MdAirlineSeatReclineNormal/>}
                statsText="Seats"
                statsValue="+45"
                color="#e55353"
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
             }
            
          </Row>

          <Row>
          {this.isActionAllowed("followers") && 
              <Col lg={3} sm={3}>
                <StatsCard
                bigIcon={<FcCheckmark/>}
                statsText="Availability"
                statsValue="2"
                color="	#2eb85c"
                // statsIcon={<i className="fa fa-refresh" />}
                // statsIconText="Updated now"
              />
            </Col>
             }
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
