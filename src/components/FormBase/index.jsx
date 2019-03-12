import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import FormField from '../FormField';
import styles from './style.scss';

const StyledButton = withStyles({
  root: {
    background: '#444',
    borderRadius: 3,
    color: 'rgb(0, 235, 90)',
    height: 48,
    padding: '0 30px',
    marginTop: '40px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const FormBase = ({ config, callback, children, ...others }) => (
  <Formik
    initialValues={config.reduce(
      (agg, value) => ({
        [value.key]: value.value,
        ...agg,
      }),
      {},
    )}
    onSubmit={values => {
      callback(values);
    }}
    {...others}
  >
    {({ isSubmitting }) => (
      <Form className={styles.form}>
        {config.map(
          item =>
            !item.except && (
              <Field
                key={item.key}
                type={item.type || 'text'}
                name={item.key}
                render={props => (
                  <FormField multiline={item.multiline} {...props} />
                )}
              />
            ),
        )}
        {children}
        <StyledButton type='submit' variant='outlined' disabled={isSubmitting}>
          Verify Identity
        </StyledButton>
      </Form>
    )}
  </Formik>
);
export default FormBase;
