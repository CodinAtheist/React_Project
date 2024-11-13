import React, { useState } from 'react'; 
import axios from 'axios';
import logo_img from '../Components/Assets/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (isLogin) {
        const response = await axios.get(`http://localhost:3001/users`, {
          params: { email, password }
        });
        
        if (response.data.length > 0) {
          console.log("Login successful:", response.data);
          navigate('/');
        } else {
          alert("Invalid credentials. Please try again.");
        }
      } else {
        const userExists = await axios.get(`http://localhost:3001/users`, {
          params: { email }
        });
        
        if (userExists.data.length > 0) {
          setError("User already exists with this email");
          return;
        }

        const response = await axios.post('http://localhost:3001/users', {
          email,
          password
        });
        console.log("Sign-up successful:", response.data);
        navigate('/');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSignUpClick = () => {
    setIsLogin(false);
    setError(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src={logo_img} alt="Toy Store Logo" />
        <h1 style={styles.siteName}>Toy Store</h1>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.header}>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {!isLogin && (
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="confirmPassword">Confirm Password:</label>
            <input
              style={styles.input}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" style={styles.button}>{isLogin ? 'Login' : 'Sign Up'}</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p style={styles.signUpText}>
          Don't have an account? 
          <span style={styles.signUpLink} onClick={handleSignUpClick}> Sign up</span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginBottom: '10px',
  },
  siteName: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Nerko One, sans-serif',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    fontFamily: 'Nerko One, sans-serif',
  },
  header: {
    fontSize: '25px',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Nerko One, sans-serif',
  },
  formGroup: {
    marginBottom: '15px',
    fontFamily: 'Nerko One, sans-serif',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '278px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  button: {
    fontSize: '16px',
    backgroundColor: '#084b85d1',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '10px',
    fontFamily: 'Nerko One, sans-serif',
  },
  signUpText: {
    marginTop: '15px',
    textAlign: 'center',
    color: '#333',
    fontSize: '16px',
    fontFamily: 'Nerko One, sans-serif',
  },
  signUpLink: {
    color: '#084b85d1',
    cursor: 'pointer',
    textDecoration: 'underline',
    marginLeft: '5px',
  },
};

export default LoginPage;
