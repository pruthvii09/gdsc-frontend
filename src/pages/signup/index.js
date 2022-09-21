import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import styles from '../../Styles/pages/signup/Signup.module.css';

const Index = () => {
  const quiz = ['', '', '', '', '', '', ''];
  const [data, setData] = useState({
    name: '',
    email: '',
    contact: '',
    college: '',
    year: '',
    password: '',
    quizCategory: quiz,
  });

  const handleSignUp = () => {
    console.log(data);
  };

  const handleCatgeory = (index, category) => {
    if (quiz[index] === category) {
      quiz?.splice(index, 1, '');
    } else {
      // (quiz[index] !== category)
      // quiz[index] = category;
      quiz?.splice(index, 1, category);
      console.log(category);
    }

    console.log(data?.quizCategory);
  };

  return (
    <div className={styles.wrapper}>
      <Header>
        <h1>
          <span className={styles.blue}>Si</span>
          <span className={styles.green}>gn</span>
          <span className={styles.red}>Up</span>
        </h1>
        <p>
          Welcome to Android Compose Camp 2022 - Powered by PES MCOE GDSC.
          Register to join this amazing event!
        </p>
      </Header>

      <div className={styles.container}>
        <div className={styles.left_container}>
          <img src="/images/home/home-hero.svg" alt="" />
        </div>
        <div className={styles.form}>
          <div>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Enter you name"
                value={data?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <input
                type="email"
                placeholder="Enter your email"
                value={data?.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Enter you contact number"
                value={data?.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <input
                type="text"
                placeholder="Enter your college name"
                value={data?.college}
                onChange={(e) => setData({ ...data, college: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <select>
                <option value="1st" disabled={true} selected={true}>
                  Select your year
                </option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
              </select>
            </div>
            <div className={styles.field}>
              <input
                type="password"
                placeholder="Enter password"
                value={data?.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div
              className={`${styles.field} ${styles.quiz_categories}`}
              style={{ border: '1px solid #c5c5c5', padding: '12px' }}
            >
              <p>
                <span>Select quizzes category</span>
              </p>
              <p>Non Tech</p>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(0, 'Marvel universe')}
                  />{' '}
                  Marvel universe
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(1, 'Friends show')}
                  />{' '}
                  Friends show
                </label>
              </div>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(2, 'English OTT')}
                  />{' '}
                  English OTT
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(3, 'Hindi OTT')}
                  />{' '}
                  Hindi OTT
                </label>
              </div>
              <label>
                <input
                  type="checkbox"
                  onChange={() => handleCatgeory(4, 'Harry Potter')}
                />{' '}
                Harry Potter
              </label>
              <br />
              <p>Tech</p>
              <div className={styles.single_category}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(5, 'Android')}
                  />{' '}
                  Android
                </label>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleCatgeory(6, 'Google and GDSC')}
                  />{' '}
                  Google and GDSC
                </label>
              </div>
            </div>
          </div>
          <button onClick={handleSignUp}>Signup</button>
          <p>
            Already have and account? <Link to="/login"> Click here!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
