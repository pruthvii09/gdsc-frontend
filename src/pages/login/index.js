import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
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
        <div className={styles.form}>
          <div>
            <div className={styles.field}>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles.field}>
              <input type="password" placeholder="Enter password" />
            </div>
          </div>
          <button>Signup</button>
          <p>
            Don't have and account? <Link to="/signup"> Click here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
