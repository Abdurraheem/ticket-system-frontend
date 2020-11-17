
import React, { Component } from "react";
import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { Steps, Button, message,Checkbox,Input,Select} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik } from  "formik";

import * as yup from 'yup';
import "./Forms.scss";

import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

import Forms from "./Forms";




function CreateUser(props) {


  const state ={
    permissions:[],
    role:""
  }

  
const onchange = (e,id,name) => {
  const target = e.target;
  var value = target.value;
  
  if(target.checked){
      state.permissions[value] = value;   
  }else{
      state.permissions.splice(value, 1);
  }
}


//  const isActionAllowed = (actionName = "") => {
//     // return (this.props.actions.indexOf(actionName) >= 0) ? true : false;
//     return true;
//   }



const dispatch = useDispatch();

const change = (value) => {
  console.log(`selected ${value}`)
  state.role = value;
};


  
    const schema = yup.object().shape({
      
        
            name: yup.string()
              .required('Name is required'),
            lastName: yup.string()
              .required('Last Name is required'),
            email: yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: yup.string()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required'),
            confirmPassword: yup.string()
              .oneOf([yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required'),
           
    });
        
    return (
          <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12} right>  
                        {/* {isActionAllowed('create-user') &&
                        //  <Button  type="ghost" style={{marginBottom:"28px"}} >Create User</Button>
                        } */}
                    </Col>
                </Row>
             
                <Formik
                    validationSchema={schema}

                    initialValues={{
                    email: '',
                    lastName: '',
                    name: '',
                    password: '',
                    confirmPassword: ''
                     
                    }}
                  
                    onSubmit={(values, { setSubmitting ,resetForm}) => {
                      
                    setTimeout(() => {
                      console.log("Permissions",state.permissions)
                      let dataToSubmit = {
                      email: values.email,
                      password: values.password,
                      name: values.name,
                      lastname: values.lastName,
                      role:state.role,
                      permission: [...state.permissions]
                      };
                      
                      console.log(dataToSubmit);
                      dispatch(registerUser(dataToSubmit)).then(response => {
                        if (response.payload.success) {
                          // props.history.push("/");
                          alert("succes");
                          console.log(dataToSubmit);
                        } else {
                          alert(response.payload.err.errmsg)
                       }
                      })
                      setSubmitting(false);
                      resetForm();
                      },500);
                     
                    }}
                    >
                      {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                      }) => (
                    <form onSubmit={handleSubmit}>
                          
                        <Row>
                            <Col md={12}>
                                <Card
                                  title="User Details"
                                  content={
                                    <Forms 
                                      handleChange={handleChange} 
                                      handleBlur={handleBlur}
                                      values={values}
                                      touched={touched}
                                      errors={errors} 
                                      change={change}
                                    />
                                    }
                                >
                                
                                </Card>
                            </Col>

                            <Col md={12}>
                                <Card
                                  title="Permission"
                                  content={
                                    <Table>
                                   
                                    <thead>
                                        <tr>
                                        {thArray.map((prop, key) => {
                                        return <th key={key}>{prop}</th>;
                                        })}
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {tdArray.map((prop,key) => 
                                        {
                                            
                                            return(
                                            <tr>
                                                <td>{prop.name}</td>
                                                <td>
                                                  <Checkbox 
                                                    value={prop.name}
                                                    onChange={(event) => {
                                                      
                                                      onchange(event)
                                                      
                                                    }}
                                                  />
                                                </td>
                                            </tr>
                                            )
                                        } )}
                        
                                    </tbody>
                                   
                                    </Table>
                                }
                                >

                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={24} style={{textAlign:"center"}}>
                               <Button onClick={handleSubmit} style={{width:"170px",height:"40px",fontSize:"16px"}}>
                                  Submit
                                </Button>
                            </Col>
                        </Row>
                    </form>
                    
                    )}
                </Formik>
                       
              
            </Grid>
          </div>
        );
      
    }
    
    export default CreateUser;
    

