import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControll from './formikControll/FormikControll';
import '../assets/css/register.css';

const initialValues = {
    email: '',
    username: '',
    password: '',
    mobile: '',
    confirm_password: '',
    fname: '',
    lname: '',
    auth_mode: 'mobile',
    terms: false
};

const onSubmit = (values, submitProp) => {
    // console.log(submitProp);
    setTimeout(() => {
        submitProp.setSubmitting(false);
        submitProp.resetForm();

    }, 3000);
    console.log(values);
};

const validationSchema = Yup.object({
    username: Yup.string().required('لطفا نام کاربری را وارد کنید'),
    email: Yup.string().when('auth_mode',{
        is: 'email',
        then: (schema) => schema.required('لطفا ایمیل را وارد کنید').email('لطفا ایمیل صحیحی وارد کنید')
    }),
    mobile: Yup.number().when('auth_mode',{
        is: 'mobile',
        then: (schema)=>schema.required('لطفا موبایل را وارد کنید')
    }),
    password: Yup.string().required('لطفا رمز عبور را وارد کنید').min(8, 'رمزعبور باید حداقل 8 کاراکتر باشد'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'با رمز عبور مطابقت ندارد').required('لطفا تکرار رمز عبور را پر کنید'),
    fname: Yup.string().matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/, 'لطفا الگوی نوشتاری را رعایت کنید'),
    lname: Yup.string().matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/, 'لطفا الگوی نوشتاری را رعایت کنید'),
    terms: Yup.bool().oneOf([true], 'پذیرش قوانین الزامیست')
})

const auth_modes = [
    {
        value: 'mobile',
        text: 'موبایل'
    },
    {
        value: 'email',
        text: 'ایمیل'
    }
]

const Register = () => {

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnMount
            enableReinitialize
            initialTouched={{terms: true}}
        >
            {(formik) => {
                console.log(formik);
                return (
                    <Form className="form-3">
                        <div className="clearfix">
                            <FormikControll controller="input" type="text" label="نام کاربری" name="username" />
                        </div>
                        <div className="clearfix">
                            <FormikControll controller="input" type="text" label="نام" name="fname" />
                        </div>
                        <div className="clearfix">
                            <FormikControll controller="input" type="text" label="نام خانوادگی" name="lname" />
                        </div>
                        <div className="clearfix radio">
                            <FormikControll controller="radio" label="نحوه اعتبارسنجی" name="auth_mode" options={auth_modes} />
                        </div>
                        {formik.values.auth_mode === "mobile" ? (
                            <div className="clearfix">
                                <FormikControll controller="input" type="number" label="موبایل" name="mobile" />
                            </div>
                        ) : (
                            <div className="clearfix">
                                <FormikControll controller="input" type="email" label="ایمیل" name="email" />
                            </div>

                        )}


                        <div className="clearfix ">
                            <FormikControll controller="input" type="password" label="رمز عبور" name="password" />
                        </div>
                        <div className="clearfix ">
                            <FormikControll controller="input" type="password" label="تکرار رمز عبور" name="confirm_password" />
                        </div>
                        <div className="clearfix radio">
                            <FormikControll controller="terms" label="قوانین را مطالعه کرده ام" name="terms" options={[{value: 'yes', text: "بلی"}]} />
                        </div>
                        {/* <div className="clearfix ">
                            <FormikControll controller="checkbox" label="قوانین را مطالعه کرده ام" name="terms" options={['yes']} />
                        </div> */}

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


                    </Form>
                )
            }}

        </Formik>

    );
}

export default Register;
