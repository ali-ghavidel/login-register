import React from 'react';

const PersonalError = (props) => {
    return (
        <sub className='text-danger text-center'>
            {props.children}
        </sub>
    );
}

export default PersonalError;
