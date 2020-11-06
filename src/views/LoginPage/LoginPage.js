import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from  "../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";
import { style } from "variables/Variables";
import "./LoginPage.css";
import RegisterPage from "views/RegisterPage/RegisterPage";

const { Title } = Typography;




function LoginPage(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
  <>
  
  <Formik
      initialValues={{
        email: initialEmail,
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password: values.password
          };

          dispatch(loginUser(dataToSubmit))
          
            .then(response => {
              if (response.payload.loginSuccess) {
                window.localStorage.setItem('userId', response.payload.userId);
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/admin");
              } else {
                setFormErrorMessage('Check out your Account or Password again')
              }
              
            })
            .catch(err => {
              setFormErrorMessage('Check out your Account or Password again')
              setTimeout(() => {
                setFormErrorMessage("")
              }, 3000);
            });
          setSubmitting(false);
        }, 500);


      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;

        return (
          <div className="forms-container">
              <div className="signin-signup1">
                <form onSubmit={handleSubmit} className="sign-in-form">
                  <h2 className="title">Sign in</h2>
                
                  <div className="input-field">
                    <i><Icon type="user"/></i>
                    <Form.Item required> 
                    <Input
                    id="email"
                    placeholder="Enter your email"
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
                    </Form.Item>
                  </div>


                  <div className="input-field">
                    <i><Icon type="lock"/></i>
                    <Form.Item required>
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
                    </Form.Item>
                  </div>
              
                {formErrorMessage && (
                  <label ><p style={{ color: '#ff0000bf', fontSize: '0.7rem', border: '1px solid', padding: '1rem', borderRadius: '10px' }}>{formErrorMessage}</p></label>
                )}

              <div>
                <button type="primary" htmlType="submit" className="btn" disabled={isSubmitting} onSubmit={handleSubmit}>
                  Log in
                </button>
              </div>

              <div>
                <h3 className="title">Don't have an account?<a href="/register">Sign up!</a></h3>
              </div>
            </form>
                  
          

            </div>
          </div>

        )
      }}
      </Formik>

    
  </>
  );
}
        
export default withRouter(LoginPage);


