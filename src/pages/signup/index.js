import React, { useState } from 'react';
import styles from '../../Styles/pages/signup/Signup.module.css';
// email, name, contact, college, year, password
const Index = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const [changeForm, setChangeForm] = useState(false);

  // Signin fields
  const [emptyFieldsSignIn, setEmptyFieldsSignIn] = useState([]);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  // Signup fields
  const [signupData, setSignupData] = useState({
    email: '',
    name: '',
    contact: '',
    college: '',
    year: '',
    password: '',
    quizCategory: '',
  });

  // Signin
  const handleSignIn = (e) => {
    e.preventDefault();

    setEmptyFieldsSignIn([]);

    if (loginData?.email?.length <= 0) {
      return setEmptyFieldsSignIn((prevArr) => [...prevArr, 'email']);
    }
    if (loginData?.password?.length <= 0) {
      return setEmptyFieldsSignIn((prevArr) => [...prevArr, 'password']);
    }

    console.log(emptyFieldsSignIn);
    console.log(loginData);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.container} ${
          toggleClass && styles.right_panel_active
        }`}
        id="container"
      >
        <div
          className={`${styles.form_container} ${styles.sign_up_container} ${
            changeForm && styles.hide
          }`}
        >
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Contact" />
            <input type="text" placeholder="College" />
            <select name="field" id="field">
              <option value="select">Select your Field</option>
              <option value="web_dev">Web Devlopment</option>
              <option value="android_dev">Android Devlopment</option>
              <option value="blockchain">Blockchain</option>
              <option value="ui/ux">UI/UX</option>
            </select>
            <input type="text" placeholder="Year" />
            <input type="password" placeholder="Password" />
            <a onClick={() => setChangeForm(!changeForm)}>
              Already have account SignIn
            </a>
            <button>Sign Up</button>
          </form>
        </div>
        <div className={`${styles.form_container} ${styles.sign_in_container}`}>
          <form action="#" className={styles.sign_in_form}>
            <h1>Sign in</h1>
            <div className={styles.social_container}></div>
            <input
              type="email"
              placeholder="Email"
              className={
                emptyFieldsSignIn?.includes('email') ? styles.error : ''
              }
              value={loginData?.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className={
                emptyFieldsSignIn?.includes('password') ? styles.error : ''
              }
              value={loginData?.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
            <a href="#" onClick={() => setToggleClass(!toggleClass)}>
              New to GDSC PESMCOE SignUp
            </a>
            <button onClick={(e) => handleSignIn(e)}>Sign In</button>
          </form>
        </div>
        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
              <h1>GDSC PESMCOE</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={styles.ghost}
                id="signIn"
                onClick={() => setToggleClass(!toggleClass)}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
              <h1>GDSC PESMCOE</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className={styles.ghost}
                id="signUp"
                onClick={() => setToggleClass(!toggleClass)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
