import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  // Initial State
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log('submitted:', formData);
  };

  return (
    <div className='landing'>
      <div className='landing-inner'>
        <div className='container bg-light'>
          <h1 className='x-large'>
            <i className='fas fa-code-branch' /> Dev<span>Connector</span>
          </h1>
          <p className='lead'>
            Create a profile - Share posts - Collaborate with other developers
          </p>
          <form onSubmit={e => onSubmit(e)}>
            <div className='text-fields'>
              <input
                type='email'
                name='email'
                className='text-input'
                placeholder='email'
                value={email}
                onChange={e => onChange(e)}
              />
              <input
                type='password'
                name='password'
                className='text-input'
                placeholder='password'
                value={password}
                onChange={e => onChange(e)}
              />
              <button type='submit' className='btn btn-dark'>
                Log In
              </button>
            </div>
          </form>
          <h4 className='my-1 text-center'>
            Don't have an account? <br />
            <Link to='/register'>Create one here</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landing;
