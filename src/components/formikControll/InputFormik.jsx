import React from 'react';
import PersonalError from './PersonalError';
import { ErrorMessage, FastField } from 'formik';

const InputFormik = ({type, name, label}) => {
    return (
        <div className="mb-3">
           
            <FastField type={type} className="form-control" id={name} name={name} />
            <label htmlFor={name} className="form-label">{label}</label>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default InputFormik;
