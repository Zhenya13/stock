import React from "react";
import { Form, withFormik } from "formik";
import { Field } from "formik";

const LoginForm = ({ loginHandle }) => {
  return (
    <div class="form">
      <div className="tab-content">
        <div id="signup">
          <h1>Login</h1>

          <Form>
            <div class="field-wrap">
              <label>
                Login<span class="req">*</span>
              </label>
              <Field type="text" placeholder="Enter login" name="login" />
            </div>

            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <Field type="password" placeholder="Enter password" name="password" />
            </div>

            <button type="submit" class="button button-block">Submit</button>
          </Form>
        </div>
      </div>
    </div>
  );
};


const Login = withFormik({
  mapPropsToValues() {
    return {
      login: "",
      password: ""
    };
  },
  handleSubmit(values, { props }) {
    props.loginHandle(values.login, values.password);
  }
})(LoginForm);

export default Login;
