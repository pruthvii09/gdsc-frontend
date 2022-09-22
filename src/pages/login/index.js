import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dialog from '../../Components/Dialog';
import Header from '../../Components/Header';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useUserContext();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [openDialog, setOpenDialog] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [disableSignup, setDisableSignup] = useState(false);

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/events');
    }
  });

  const handleSignIn = async () => {
    setDisableSignup(true);
    setShowError(false);
    setError('');
    setEmptyFields([]);

    if (data?.email?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, 'email']);
    } else if (data?.password?.length <= 0) {
      setEmptyFields((emptyFields) => [...emptyFields, 'password']);
    } else {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/users/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...data }),
        }
      );

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
        setData({
          email: '',
          password: '',
        });
        setOpenDialog(true);
      }
      if (!response.ok) {
        setError(json.error);
        setShowError(true);
      }
    }
    setDisableSignup(false);
  };
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1>
          <span className={styles.blue}>Lo</span>
          <span className={styles.green}>g</span>
          <span className={styles.red}>in</span>
        </h1>
        <p>
          Welcome to Android Compose Camp 2022 - Powered by PES MCOE GDSC. Login
          to join this amazing event!
        </p>
      </Header>

      <div className={styles.container}>
        <div className={styles.left_container}>
          <img src="/images/home/home-hero.svg" alt="" />
        </div>
        <div className={styles.form} style={{ marginTop: '90px' }}>
          <div>
            <div className={styles.field}>
              <input
                type="email"
                placeholder="Enter your email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className={
                  emptyFields?.includes('email') ? styles.error_field : ''
                }
              />
            </div>
            <div className={`${styles.field} ${styles.password_field}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={data?.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className={
                  emptyFields?.includes('email') ? styles.error_field : ''
                }
              />
              {showPassword ? (
                <i
                  class="uil uil-eye-slash"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              ) : (
                <i
                  class="uil uil-eye"
                  onClick={() => setShowPassword(!showPassword)}
                ></i>
              )}
            </div>
          </div>
          {showError && (
            <div className={styles.error}>
              {error}
              <i
                class="uil uil-times-circle"
                onClick={() => setShowError(!showError)}
              ></i>
            </div>
          )}
          <button onClick={handleSignIn} disabled={disableSignup}>
            Login
          </button>
          <p>
            Don't have and account? <Link to="/signup"> Click here!</Link>
          </p>
        </div>
      </div>

      <Dialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={'Login Scuccessful!'}
        children={
          <div>
            <p>You are logged in to Android Compose Camp 2022 event!</p>
            <button
              className={styles.button}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </button>
          </div>
        }
      />
    </div>
  );
};

export default Index;
