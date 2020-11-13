import React from "react";
import {Input,Select,Button} from "antd";
import { Formik } from  "formik";

import * as yup from 'yup';
import "./Forms.scss";

import { registerUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

export default function Forms(props){

  
const { Option } = Select;
  return(
              <div className="form-container">
                    <div>
                        <label for="name" style={{fontWeight:"bolder"}}>Name</label>
                        <Input 
                        id="name"
                        placeholder="Enter your name"
                        type="text"
                        value={props.values.name}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className={
                          props.errors.name && props.touched.name ? 'text-input error' : 'text-input'
                        }
                        />
                         {props.errors.name && props.touched.name && (
                        <div className="input-feedback">{props.errors.name}</div>
                        )}
                    </div>

                    <div>
                        <label for="lastName" style={{fontWeight:"bolder"}}>Last Name</label>
                        <Input 
                        id="lastName"
                        placeholder="Enter your Last Name"
                        type="text"
                        value={props.values.lastName}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className={
                         props.errors.lastName && props.touched.lastName ? 'text-input error' : 'text-input'
                        }
                       />
                       {props.errors.lastName && props.touched.lastName && (
                       <div className="input-feedback">{props.errors.lastName}</div>
                       )}
                    </div>

                    <div>
                        <label for="email" style={{fontWeight:"bolder"}}>Email</label>
                        <Input
                        id="email"
                        placeholder="Enter your Email"
                        type="email"
                        value={props.values.email}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className={
                          props.errors.email && props.touched.email ? 'text-input error' : 'text-input'
                        }
                        />
                        {props.errors.email && props.touched.email && (
                          <div className="input-feedback">{props.errors.email}</div>
                        )}
                    </div>


                    <div>
                    <label for="password" style={{fontWeight:"bolder"}}>Password</label>
                        <Input 
                         id="password"
                         placeholder="Enter your password"
                         type="password"
                         value={props.values.password}
                         onChange={props.handleChange}
                         onBlur={props.handleBlur}
                         className={
                           props.errors.password && props.touched.password ? 'text-input error' : 'text-input'
                         }
                         />
                         {props.errors.password && props.touched.password && (
                         <div className="input-feedback">{props.errors.password}</div>
                         )}

                    </div>

                    <div>
                        <label for="confirmPassword" style={{fontWeight:"bolder"}}>Confirm Password</label>
                        <Input 
                        id="confirmPassword"
                        placeholder="Confirm your Password"
                        type="password"
                        value={props.values.confirmPassword}
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        className={
                          props.errors.confirmPassword && props.touched.confirmPassword ? 'text-input error' : 'text-input'
                        }
                        />
                        {props.errors.confirmPassword && props.touched.confirmPassword && (
                        <div className="input-feedback">{props.errors.confirmPassword}</div>
                        )}

                    </div>
                    <div></div>

                    <div>
                    <label for="confirmPassword" style={{fontWeight:"bolder"}}>Select Role</label>
                        <Select defaultValue="Super Admin" onChange={props.change}>
                            <Option value="Super Admin">Super Admin</Option>
                            <Option value="Admin">Admin</Option>
                            <Option value="Driver">Driver</Option>
                            <Option value="User">User</Option>
                        </Select>
                    </div>

                    
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
               
                </div>  
  )}
