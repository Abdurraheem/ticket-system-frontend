import React, { Component } from "react";

import {Button} from "antd"
import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";
import {getUsers} from "../../_actions/user_actions";

class BusDetails extends Component{
  
  render(){
    
    return (  
            <Grid fluid>
                <Row>
                    <Col md={12} right>  
                        {/* {isActionAllowed('create-user') && */}
                         <Button style={{marginBottom:"28px",marginTop:"28px"}}>+Add Bus</Button>
                        {/* } */}
                    </Col>
                </Row>

    
        <Row>
          <Col>
              <Card
                title="Bus Details"
                content={
                  
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Bus Name</th>
                        <th>Bus Reg.No.</th>
                        <th>Bus Type</th>
                        <th>Maximum Seats</th>
                        <th>Start Point</th>
                        <th>Start Time</th>
                        <th>Drop Point</th>
                        <th>Drop Time</th>
                      </tr>
                    </thead>
                    
                    <tbody>

                    
                          <tr>
                            
                          </tr>
                        
                      
                                  
                        
                    </tbody>
                                   
                  </Table>

                }
              >

              </Card>
          </Col>
        </Row>
      </Grid>
    
    )
}
}
export default BusDetails;