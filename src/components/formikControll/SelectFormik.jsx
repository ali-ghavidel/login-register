import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';

const SelectFormik = ({ name, label, options }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <FastField as="select" className="form-control" id={name} name={name} >
                {options.map((v,key)=>{
                    return ( <option key={key}>{v.text}</option>)
                })}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default SelectFormik;
