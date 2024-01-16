import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Signup = () => {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [required, setRequired] = useState('');

  const createUser = (username, password) => {
    return axios.post('https://quiz-app-back-end-wuso.onrender.com/signup', {
      username: username,
      password: password,
      email: email,
    });
  };

  const handleChangeUserName = (event) => {
    const name1 = event.target.value;
    if (name1.length <= 4) {
      setUsernameError('must be more than 4 characters');
    } else {
      setUsernameError('');
    }
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    const email1 = event.target.value;
    if (!email1.includes('@')) {
      setEmailError('must include @');
    } else {
      setEmailError('');
    }
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    const pass1 = event.target.value;
    setPassword(event.target.value);
    if (pass1.length < 8) {
      setPasswordError('at least 8');
    } else {
      setPasswordError('');
    }
    setPassword(event.target.value);
  };

  const handleSignup = async () => {
    if (username === '' || email === '' || password === '') {
      setRequired('Please enter all inputs');
    } else {
      try {
        await createUser(username, password);
        alert('Sign up successful');
        router.back(); 
      } catch (error) {
        console.error('Error during signup:', error);
      }
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <div className='container'>
        <div className='login'>
          <div className='inputs'>
            <div>This is front-end</div>

            <input
              className='email'
              placeholder='Email or phone number'
              onChange={handleChangeEmail}
            ></input>
            <div style={{ color: 'red' }}>{emailError}</div>
            <input
              className='email'
              placeholder='username'
              value={username}
              onChange={handleChangeUserName}
            ></input>
            <div style={{ color: 'red' }}>{usernameError}</div>
            <input
              className='email'
              placeholder='Password'
              type='password'
              onChange={handleChangePassword}
            ></input>
            <div style={{ color: 'red' }}>{passwordError}</div>

            <button className='backButton' onClick={handleGoBack}>Go Back</button>

            <div className='loginButton' onClick={handleSignup}>
              Sign up
            </div>
            <div style={{ color: 'red' }}>{required}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
