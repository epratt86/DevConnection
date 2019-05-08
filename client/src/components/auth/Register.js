import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import Alert from '../../components/layout/Alert';
import PropTypes from 'prop-types';

// destructured from props
const Register = ({ setAlert }) => {
  // Initial State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Whoops! Passwords do not match', 'danger');
    } else {
      console.log('it works');
    }
  };

  return (
    <section id='register'>
      <div className='container bg-light'>
        <Alert />
        <h1 className='large text-primary my-2'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user' /> Create Your Account
        </p>
        <form onSubmit={e => onSubmit(e)} className='form'>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              className='form-field'
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              placeholder='Email'
              className='form-field'
              required
            />
            <small className='form-text'>This site uses Gravatar</small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-field'
              placeholder='Password'
              minLength='6'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-field'
              placeholder='Confirm Password'
              minLength='6'
              name='password2'
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type='submit' value='Register' className='btn btn-primary' />
        </form>
        <p className='my-1'>
          Already have an account? <Link to='/'>Sign In</Link>
        </p>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAlert }
)(Register);
