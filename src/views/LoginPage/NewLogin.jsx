import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../_actions/user_actions";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { useDispatch } from "react-redux";
import "./NewLogin.scss";
import login from "../../assets/img/login.jpg";
const { Title } = Typography;


function NewLogin(props) {
  const dispatch = useDispatch();
  const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;

  const [formErrorMessage, setFormErrorMessage] = useState('')
  const [rememberMe, setRememberMe] = useState(rememberMeChecked)

  const handleRememberMe = () => {
    setRememberMe(!rememberMe)
  };

  const initialEmail = localStorage.getItem("rememberMe") ? localStorage.getItem("rememberMe") : '';

  return (
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
                if (rememberMe === true) {
                  window.localStorage.setItem('rememberMe', values.id);
                } else {
                  localStorage.removeItem('rememberMe');
                }
                props.history.push("/admin/dashboard");
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
            <>
                <div className="container">
                    <div className="card login-card">
                        <div className="row no-gutters">
                            <div className="col-md-5">
                                <img src={login} alt="login" class="login-card-img"/>
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <div className="brand-wrapper">
                                        <img src="assets/images/logo.svg" alt="logo" className="logo"/>
                                    </div>
                                    <p className="login-card-description">Sign into your account</p>
                                    <form action="#!">
                                         <div className="form-group">
                                            <label for="email" className="sr-only">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" placeholder="Email address"/>
                                        </div>
                                        <div className="form-group mb-4">
                                            <label for="password" className="sr-only">Password</label>
                                            <input type="password" name="password" id="password" className="form-control" placeholder="***********"/>
                                        </div>
                                        <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login"/>
                                    </form>
                                </div>



                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        );
      }}
    </Formik>
  );
};

export default NewLogin



