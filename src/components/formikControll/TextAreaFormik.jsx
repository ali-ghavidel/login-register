import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';
// import { validateBio } from '../form/formik';

const TextAreaFormik = ({name, label, type}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField type={type} className="form-control" id={name} name={name} component="textarea" />
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default TextAreaFormik;
