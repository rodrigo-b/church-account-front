import React from 'react'
import {TextField} from '@material-ui/core';

function Input (props){


    const {name,label,value,type,onChange} = props;

    return (
            <TextField
                        variant="outlined"
                        label={label}
                        name={name}
                        value={value}
                        type={type}
                        onChange = {onChange}
            />
    )

}

export default Input;