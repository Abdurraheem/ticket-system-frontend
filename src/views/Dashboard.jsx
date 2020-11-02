import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

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
              <Col lg={3} sm={6}>
                <StatsCard
                  bigIcon={<i className="pe-7s-server text-warning" />}
                  statsText="Capacity"
                  statsValue="105GB"
                  statsIcon={<i className="fa fa-refresh" />}
                  statsIconText="Updated now"
                />
              </Col>
            )}
             {this.isActionAllowed("revenue") && 
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </Col>
             }
             {this.isActionAllowed("errors") && 
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
             }
             {this.isActionAllowed("followers") && 
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fa fa-twitter text-info" />}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
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
