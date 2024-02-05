import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import PersonalError from './PersonalError';

const RadioFormik = ({ name, label, options }) => {
    return (
        <div className="mb-3 d-flex justify-content-center align-items-center flex-row-reverse">
            
            <FastField className="form-control" id={name} name={name} >
                {(props) => {
                    // console.log("radio props: ");
                    // console.log(props);
                    return options.map((v, key) => {
                        return (
                            <Fragment key={key}>
                                <label className='mx-1 ms-4' htmlFor={v.value+key}>{v.text}</label>
                                <input className='form-check-input me-4' type='radio' id={v.value+key} {...props.field} value={v.value}  />
                                
                            </Fragment>
                        )
                    })
                }}
            </FastField>
            <label htmlFor={name} className="form-label label-radio">{label}</label>
            <ErrorMessage name={name} component={PersonalError} />
        </div>
    );
}

export default RadioFormik;
