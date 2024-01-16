import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    if (email.trim() === '' || password.trim() === '') {
      alert('Please fill in all inputs');
      return;
    }

    try {
      const res = await axios.post('https://quiz-app-back-end-wuso.onrender.com/login', {
        email: email,
        password: password,
      })
      console.log(res)
      alert('Hello user');
      localStorage.setItem('user', true);
      localStorage.setItem('userID', res.data._id);
      router.push('/');
      setEmail('');
      setPassword('');
    } catch (err) {
      alert('User not found');
    }
  };

  const changeRoute = () => {
    router.push('/signup');
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className='pass'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className='loginButton' onClick={() => loginUser(email, password)}>
              Login
            </div>
            <div className='loginButton' onClick={() => changeRoute()}>
              Sign up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

