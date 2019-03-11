import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
  input: {},
  textFieldRoot: {
    color: 'rgb(6, 185, 75)',
    fontFamily: 'inherit',
    background: 'transparent',
  },
  underline: {
    '&:after': {
      borderBottom: '1px solid rgb(6, 185, 75)',
    },
  },
  textFieldFormLabel: {
    color: 'rgb(6, 185, 75)',
    '&$focused': {
      color: 'inherit',
    },
    fontFamily: 'inherit',
  },
  focused: {
    color: 'rgb(6, 185, 75)',
  },
};

export default withStyles(styles)(
  ({ classes, field, form, children, multiline, ...props }) => (
    <TextField
      type='text'
      margin='normal'
      color='info'
      className={classes.root}
      InputProps={{
        classes: {
          root: classes.textFieldRoot,
          input: classes.textFieldInput,
          underline: classes.underline,
          focused: classes.focused,
        },
      }}
      InputLabelProps={{
        className: classes.textFieldFormLabel,
        FormLabelClasses: {
          focused: classes.focused,
        },
      }}
      label={field.name.split('.')[1] || field.name}
      multiline={multiline}
      rows={multiline ? 3 : 1}
      {...field}
      {...props}
      error={!!(form.touched[field.name] && form.errors[field.name])}
      helperText={
        form.touched[field.name] && form.errors[field.name]
          ? form.errors[field.name]
          : ''
      }
    >
      {children}
    </TextField>
  ),
);
