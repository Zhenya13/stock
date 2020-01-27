import React from 'react';
import {Form, withFormik} from "formik";
import {Field} from "formik";

const readURL = (document) => {
    const input = document;
    if (input) {
        var reader = new FileReader();

        reader.onload = function (e) {
            return e.target.result;
            
        };
        

        reader.readAsDataURL(input);
    }
}

const AddPhotoForm = ({addPhotoHandle, setFieldValue, userInfo}) => {

    const handleUpload = (e) => {
        console.log(e.currentTarget.files[0]);
        const str = readURL(e.currentTarget.files[0])
        console.log(str);
        
        // setFieldValue('img', readURL(e.currentTarget.files[0]))
    }

    const readURL = (e) => {
        const input = e.target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {                
                setFieldValue('img', e.target.result)
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    

    return (
        <div>
            {userInfo ?
                    <Form>
                    <div>
                        {/* <Field placeholder="Image link..." name="img"/> */}
                        <input type='file' placeholder="Image link..." name="img" onChange={readURL} />
                        {/* <input type='file' onChange={readURL} name="img" /> */}
                    </div>
                    <div>
                        <Field placeholder="Description..." name="description"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
                    :
                    <h2>Please login to see this page</h2>
                }
        </div>
    );
};

const AddPhoto = withFormik({
    mapPropsToValues(){
        return{
            img: {},
            description: '',
        }
    },
    handleSubmit(values, {props}) {      
        props.addPhotoHandle(values.img, values.description);
    },
})(AddPhotoForm);

export default AddPhoto;