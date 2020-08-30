import React from 'react'
import {MuiPickersUtilsProvider, KeyboardDatePicker} from  '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

function DatePicker(props){

    const {name, label, value, onChange} = props;


    const convertToDefEventParameter = (name,value) =>({
        target:{
            name, value
        }
    })
    
    return (
        <MuiPickersUtilsProvider  utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined" 
                label={label}
                formate="MM/dd/yyyy"
                name={name}
                value={value}
                onChange={ date => onChange(convertToDefEventParameter(name,date))}
            /> 
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker;