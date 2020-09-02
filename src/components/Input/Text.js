import React from 'react'
import { TextField } from '@material-ui/core';

const Text = ({ input, meta, ...rest }) => (
    <TextField
      {...input}
      {...rest}
      onChange={value => input.onChange(value)}
      error={meta.touched && !meta.valid}
      helperText={meta.touched ? meta.error : ''}
    />
)


export default Text