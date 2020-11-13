import React, { Component } from "react";

import {Button} from "antd"
import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";
import {getUsers} from "../../_actions/user_actions";

class Customers extends Component{
  
  render(){
    
    return (  
            <Grid fluid>
                <Row>
                    <Col md={12} right>  
                        {/* {isActionAllowed('create-user') && */}
                         {/* <Button style={{marginBottom:"28px",marginTop:"28px"}}>+Add Bus</Button> */}
                        {/* } */}
                    </Col>
                </Row>

    
        <Row>
          <Col>
              <Card
                title="Customers"
                content={
                  
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        
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
export default Customers;