import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from './formikControll/FormikControll';
import { useState } from 'react';
import { useEffect } from 'react';

const initialValues = {
    email: '',
    password: ''
};

const onSubmit = (values, submitProp ) => {
    // console.log(submitProp);
    setTimeout(() => {
        submitProp.setSubmitting(false);
        // submitProp.resetForm();
        
    }, 3000);
    console.log(values);
};

const validationSchema = Yup.object({
    email: Yup.string().required('لطفا ایمیل را وارد کنید').email('لطفا ایمیل صحیحی وارد کنید'),
    password: Yup.string().required('لطفا رمز عبور را وارد کنید').min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد')
})

const Login = () => {
    const [myValues, setMyValues] = useState(null);



    useEffect(()=>{
        setMyValues(JSON.parse(localStorage.getItem('loginInfo')));
    },[])

    return (
        <Formik
            initialValues={ myValues || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount
            enableReinitialize
        >
            {(formik) => {
                console.log(formik);
                return (
                    <Form className="form-3">
                        <div className="clearfix">

                            {/* <input type="text" name="login" id="login" placeholder="نام کاربری" /> */}
                            {/* <FastField type="email" name="email" id="email" placeholder="ایمیل" /> */}
                            <FormikControll controller="input" type="email" label="ایمیل" name="email" />

                            {/* <label htmlFor="email">ایمیل</label> */}
                        </div>
                        <div className="clearfix">
                            <FormikControll controller="input" type="password" label="رمز عبور" name="password" />
                            {/* <input type="password" name="password" id="password" placeholder="رمز عبور" />
                            <label htmlFor="password">رمز عبور</label> */}
                        </div>
                        <div className="x">
                            <button type='submit' name='submit' disabled={!formik.isValid}>{
                                formik.isSubmitting ? (
                                    <div className="spinner-grow spinner-grow-sm text-light" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                ) : (
                                    "ثبت"
                                )
                            }</button>
                        </div>
                        <div className="clearfix">
                            <FormikControll
                            controller="checkbox"
                            label="مرا به خاطر بسپار"
                            name="remember"
                            options={[{id: 1, value: "yes"}]}
                            />
                            {/* <label htmlFor="remember">مرا به خاطر بسپار</label>
                            <input type="checkbox" name="remember" id="remember" /> */}
                        </div>

                    </Form>
                )
            }}

        </Formik>

    );
}

export default Login;
