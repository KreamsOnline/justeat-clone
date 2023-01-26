import { useState, useSyncExternalStore } from 'react'
import React from 'react'
import styles from './login.module.scss'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password)
  };
                                                  


  return (     
    <div className={styles.content}>
        <form onSubmit={handleSubmit} className={styles.loginform}>
          <h1>Welcome Back</h1>
          <label className={styles.contactform}>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            /> 
          </label>
          <label>
            Password:
            <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
          <button type='submit'>Log In</button>
        </form>
    </div>
  )
}

export default Login;