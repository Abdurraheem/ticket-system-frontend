import React, { Component } from "react";

import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import {Input,Select,Button} from "antd";
import "../../views/ManageUsers/Forms.scss";

function Booking(){
    return(
        <Grid fluid>

            <Row>
                <Col md={12} right>
                    <Card
                    content={
                        <form>
                            <div className="form-container">
                                <label>Bus Name</label>
                                <Input />
                            </div>
                        </form>
                    }
                    >

                    </Card>
                </Col>
            </Row>

        </Grid>

       
    )
}

export default Booking;