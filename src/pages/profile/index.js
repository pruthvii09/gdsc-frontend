import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/profile/Profile.module.css';

const Index = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  const [data, setData] = useState();

  useEffect(() => {
    if (!user) {
      navigate('/signup');
    }

    // ${process.env.REACT_APP_BACKEND_URI}

    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/users/${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
      if (!response.ok) {
        // console.log(json.error);
      }
    };

    if (user) {
      fetchData();
      console.log(user);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h2>Profile</h2>

      <div className={styles.profile_container}>
        <h3>
          Welcome <br /> <span>{data?.name}</span>
        </h3>
        <p>Thank you for the registration!</p>

        <div className={styles.horizontal_row}></div>

        <div className={styles.information}>
          <h4>Personal Information</h4>
          <p>
            Email: <span>{data?.email}</span>
          </p>
          <p>
            Contact Number: <span>{data?.contact}</span>
          </p>
          <p>
            College: <span>{data?.college}</span>
          </p>
          <p>
            Year: <span>{data?.year}</span>
          </p>
        </div>

        <div
          className={styles.horizontal_row}
          style={{ height: '0.5px' }}
        ></div>

        <div>
          <h5>Quizzes for the selected categories will be live soon.</h5>
          <div className={styles.buttons}>
            {data?.quizCategory?.map((category) => (
              <button>{category}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
