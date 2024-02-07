import React from 'react';
import PersonalError from './PersonalError';
import { ErrorMessage } from 'formik';

const InputFormik = ({ formik, name, label }) => {
    return (
        <div className="mb-3">
            <div className='file'>
                <input type='text' placeholder={label} value={formik.values[name] ? formik.values[name].name : ""} onChange={() => null} />
                <input type='file' className='fileHidden' name={name} onChange={(e) => formik.setFieldValue(name, e.target.files[0])} />
            </div>
            <label htmlFor={name} className="form-label">{label}</label>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default InputFormik;
