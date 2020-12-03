import React from "react";
import logo from './sd-logo.png';
import { Formik } from "formik";
import * as EmailValidator from "email-validator";


const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Введи данные падла";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address.";
        }
      
        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Введи пароль сцуко";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
      
        return errors;
    }}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      
      return (
        <div class="container">
            <div class="login-form__logo">
                <img src={logo} alt="logo"/>
            </div>
            <h3>Вход</h3>
            <form onSubmit={handleSubmit} action="#" class="login-form">
                <div class="login-form__inputs">
                    <label for="email">Логин</label>
                    <input 
                    id="email" 
                    name="email" 
                    type="text" 
                    placeholder="Enter your login"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                    />
                    {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                    )}
                    <label for="password">Пароль</label>
                    <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                    />
                    {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                    )}
                </div>
                <button type="submit" disabled={isSubmitting} class="login-btn" id="login-btn">Войти</button>
            </form>
        </div>
      ); 
    }}
  </Formik>
);

export default ValidatedLoginForm;