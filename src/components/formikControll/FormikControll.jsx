import React from 'react';
import InputFormik from './InputFormik';
import TextAreaFormik from './TextAreaFormik';
import SelectFormik from './SelectFormik';
import RadioFormik from './RadioFormik';
import CheckBoxFormik from './CheckBoxFormik';
import TermsCheckBox from './TermsCheckBox';
import Date from './Date'


const FormikControll = (props) => {
    switch (props.controller) {
        case "input":
            //props: type,label,name
            return <InputFormik {...props} />
        case "textarea":
            //props: type,label,name
            return <TextAreaFormik {...props} />
        case "select":
            //props: label,name,options
            return <SelectFormik {...props} />
        case "radio":
            //props: label,name,options
            return <RadioFormik {...props} />
        case "checkbox":
            //props: label,name,options
            return <CheckBoxFormik {...props} />
        case "terms":
            return <TermsCheckBox {...props} />
        case "date":
            return <Date {...props} />
        default:
            return;
    }
}

export default FormikControll;
