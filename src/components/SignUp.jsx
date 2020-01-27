import React from 'react';
import {Form, withFormik} from "formik";
import {Field} from "formik";

const SignUpForm = ({signUpHandle}) => {
 
    return (
<div className="form">
      <div className="tab-content">
        <div id="signup">
          <h1>Sign up</h1>

          <Form>
            <div className="field-wrap">
              <label>
                Login<span className="req">*</span>
              </label>
              <Field placeholder="Enter login..." name="login"/>
            </div>

            <div className="field-wrap">
              <label>
                Password<span className="req">*</span>
              </label>
              <Field type='password' placeholder="Enter password..." name="password"/>
            </div>

            <div className="field-wrap">
              <label>
                Name<span className="req">*</span>
              </label>
              <Field placeholder="Name..." name="name"/>
            </div>

            <div className="field-wrap">
              <label>
              Description<span className="req">*</span>
              </label>
              <Field placeholder="Description..." name="description"/>
            </div>

            <div className="field-wrap">
              <label>
              Image link<span className="req">*</span>
              </label>
              <Field placeholder="Image link..." name="img"/>
            </div>

            <button type="submit" className="button button-block">Submit</button>
          </Form>
        </div>
      </div>
    </div>
    );
};

const SignUp = withFormik({
    mapPropsToValues(){
        return{
            login: '',
            password: '',
            name: '',
            description: '',
            img: ''
        }
    },
    handleSubmit(values, {props}) {
        props.signUpHandle({login: values.login, password: values.password, name:values.name, description:values.description, img:values.img});
    },
})(SignUpForm);

export default SignUp;