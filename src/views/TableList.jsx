
import React, { Component } from "react";
import { Grid, Row, Table,Col} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import { Steps, Button, message,Checkbox,Input,Select} from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./TableList.css";
import { Formik } from  "formik";

import * as yup from 'yup';


import { registerUser } from "../_actions/user_actions";
import { useDispatch } from "react-redux";


const { Step } = Steps;



const permission = {
  id:"",
  value:""
}

const permissionsArray  = [];

const onchange = (e,id) => {

  console.log(e.target.checked,id)
  permission.id = id;
  permission.value = e.target.checked;
  if(permission.value){
    permissionsArray.push(permission);
  }
  

}


function Forms(){
  const dispatch = useDispatch();
  const { Option } = Select;

  console.log("Array is:",permissionsArray)
  const handleChange = (value) => console.log(`selected ${value}`);
  
  
    
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
                .required('Confirm Password is required')
            
      });
  
  
        return(
         
          <Formik
            validationSchema={schema}
            
            initialValues={{
              email: '',
              lastName: '',
              name: '',
              password: '',
              confirmPassword: ''
            }}
  
            onSubmit={(values, { setSubmitting }) => {
         
              setTimeout(() => {
      
                let dataToSubmit = {
                  email: values.email,
                  password: values.password,
                  name: values.name,
                  lastname: values.lastname,
                };
      
                dispatch(registerUser(dataToSubmit)).then(response => {
                  if (response.payload.success) {
                   // props.history.push("/");
                   alert("succes");
                  } else {
                    alert(response.payload.err.errmsg)
                  }
                })
      
                setSubmitting(false);
              }, 500);
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
                  <div className="form-container">
                      <div>
                          <label for="name" style={{fontWeight:"bolder"}}>Name</label>
                          <Input 
                          id="name"
                          placeholder="Enter your name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.name && touched.name ? 'text-input error' : 'text-input'
                          }
                          />
                           {errors.name && touched.name && (
                          <div className="input-feedback">{errors.name}</div>
                          )}
                      </div>
  
                      <div>
                          <label for="lastName" style={{fontWeight:"bolder"}}>Last Name</label>
                          <Input 
                          id="lastName"
                          placeholder="Enter your Last Name"
                          type="text"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                           errors.lastName && touched.lastName ? 'text-input error' : 'text-input'
                          }
                         />
                         {errors.lastName && touched.lastName && (
                         <div className="input-feedback">{errors.lastName}</div>
                         )}
                      </div>
  
                      <div>
                          <label for="email" style={{fontWeight:"bolder"}}>Email</label>
                          <Input
                          id="email"
                          placeholder="Enter your Email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.email && touched.email ? 'text-input error' : 'text-input'
                          }
                          />
                          {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                          )}
                      </div>
  
  
                      <div>
                      <label for="password" style={{fontWeight:"bolder"}}>Password</label>
                          <Input 
                           id="password"
                           placeholder="Enter your password"
                           type="password"
                           value={values.password}
                           onChange={handleChange}
                           onBlur={handleBlur}
                           className={
                             errors.password && touched.password ? 'text-input error' : 'text-input'
                           }
                           />
                           {errors.password && touched.password && (
                           <div className="input-feedback">{errors.password}</div>
                           )}
  
                      </div>
  
                      <div>
                          <label for="confirmPassword" style={{fontWeight:"bolder"}}>Confirm Password</label>
                          <Input 
                          id="confirmPassword"
                          placeholder="Confirm your Password"
                          type="password"
                          value={values.confirmPassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                          }
                          />
                          {errors.confirmPassword && touched.confirmPassword && (
                          <div className="input-feedback">{errors.confirmPassword}</div>
                          )}
  
                      </div>
                      <div></div>
  
                      <div>
                      <label for="confirmPassword" style={{fontWeight:"bolder"}}>Select Role</label>
                          <Select defaultValue="Super Admin" onChange={handleChange}>
                              <Option value="Super Admin">Super Admin</Option>
                              <Option value="Admin">Admin</Option>
                              <Option value="User">User</Option>
                          </Select>
                      </div>
  
                      <div>
                        <Button onClick={handleSubmit}>Submit</Button>
                      </div>
                      <div></div>
                      <div></div>
                
                 
                  </div>  
  
  
                  
              </form>
              
            
            )}
          </Formik>
        );
        
  }
    



function Permissions(){

  return(
    <>
    <Table striped hover>
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
                        console.log(prop)
                        return(
                          <>
                            <tr>
                              <td>{prop.name}</td>
                              <td><Checkbox onChange={(event) => onchange(event,prop.id)}/></td>
                            </tr>
                          </>
                        )
                      } )}
                        
                    </tbody>
                  </Table>
                </>
  )

}


const steps = [
  {
    title: 'User Details',
    content: <Forms />,
  },
  {
    title: 'Permissions',
    content: <Permissions />,
  },
  
];

function TableList(props) {

  
const [current, setCurrent] = React.useState(0);

  const isActionAllowed = (actionName = "") => {
    // return (this.props.actions.indexOf(actionName) >= 0) ? true : false;
    return true;
  }

  

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };


  
    console.log(props);
    return (
      <div className="content">
        <Grid fluid>
        <Row>
          <Col md={12} right>  
          {isActionAllowed('create-user') &&
             <Button  type="ghost" style={{marginBottom:"28px"}} >Create User</Button>
           }
          </Col>
        </Row>
          <Row>
            <Col md={12}>
              <Card
                title="Add User"
                category=""
                ctTableFullWidth
                ctTableResponsive
                content={
                  <>
                  <Steps current={current}>
                  {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                  ))}
                  </Steps>
                  <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current < steps.length - 1 && (
                        <Button type="primary" style={{marginLeft:"20px"}} onClick={() =>next()}>
                          Next
                        </Button>
                        )}
                        {current === steps.length - 1 && (
                        <Button type="primary" style={{marginLeft:"20px"}}onClick={() => message.success('Processing complete!')}>
                          Done
                        </Button>
                        )}
                        {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                          Previous
                        </Button>
                        )}
                    </div>
                  </>
                }
              />
            </Col>

       
          </Row>
        </Grid>
      </div>
    );
  
}

export default TableList;
