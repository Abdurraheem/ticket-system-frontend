
import React, { Component } from "react";

import {Button} from "antd"
import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { connect } from "react-redux";
import {getUsers} from "../../_actions/user_actions";

class ManageUsers extends Component{
  
  componentDidMount() {

    this.props.dispatch(getUsers());
  }


  render(){
    
    
    const { userList } = this.props;
    console.log(userList);


    userList.map((user) => {
      console.log("user is:",user.name);
    })

    return (  
            <Grid fluid>
                <Row>
                    <Col md={12} right>  
                        {/* {isActionAllowed('create-user') && */}
                         <Button style={{marginBottom:"28px",marginTop:"28px"}} onClick={() => this.props.history.push('/admin/create_user')}>Create User</Button>
                        {/* } */}
                    </Col>
                </Row>

    
        <Row>
          <Col>
              <Card
                title="Registered Users"
                content={
                  
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th>Permissions</th>
                       
                      </tr>
                    </thead>
                    
                    <tbody>

                      {userList.map((user,key) => {
                        return(
                          <tr>
                            <td>{key+1}</td>
                            <td>{user.name}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.role}</td>
                            <td>{user.permission}</td>
                            
                          </tr>
                        )
                      })}
                                  
                        
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

const mapStateToProps = state => {
 
  return {
     
      userList: state.user.users || []
  }
}


export default connect(mapStateToProps)(ManageUsers);