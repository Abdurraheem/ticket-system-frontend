
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class StatsCard extends Component {
  style = {
    backgroundColor:this.props.color,
    height:"150px"
  }
  render() {
    return (
      <div className="card card-stats" style={this.style} >
        <div className="content" style={{color:"white"}} >
          <Row>
            <Col xs={5}>
              <div className="icon-big icon-warning" style={{paddingLeft:"10px"}} >
                {this.props.bigIcon}
              </div>
            </Col>
            <Col xs={7}>
              <div className="numbers">
                <p>{this.props.statsText}</p>
                {this.props.statsValue}
              </div>
            </Col>
          </Row>
          <div className="footer" style={{paddingTop:"25px"}}>
            <hr />
           
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
