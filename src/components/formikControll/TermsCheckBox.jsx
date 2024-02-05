import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';
import PersonalError from './PersonalError';

const TermsCheckBox = ({ name, label, options }) => {
    return (
        <div className="mb-3">
            {/* <label htmlFor={name} className="form-label">{label}</label> */}
            <FastField className="form-control" id={name} name={name} >
                {(props) => {
                    console.log("checkbox props: ");
                    console.log(props);
                    
                    return options.map((v, key) => {
                        return (
                            <Fragment key={key}>
                                <div className="form-check form-switch d-flex justify-content-start align-items-center">
                                <label className="form-check-label" htmlFor={name}>{label}</label>
                                    <input className="form-check-input" type="checkbox" id={name} {...props.field} value={v.value} />
                                    
                                </div>
                                {/* <input className='form-check-input me-4' type='checkbox' id={v.value} {...props.field} value={v.value} />
                                <label className='mx-1 ms-4' htmlFor={v.value}>{v.value}</label> */}
                            </Fragment>
                        )
                    })
                }}
            </FastField>
            <ErrorMessage name={name} component={PersonalError} />
           
        </div>
    );
}

export default TermsCheckBox;
