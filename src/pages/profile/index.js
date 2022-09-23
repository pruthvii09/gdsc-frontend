import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUserContext';
import styles from '../../Styles/pages/profile/Profile.module.css';

const Index = () => {
  const navigate = useNavigate();

  const { user } = useUserContext();

  const [data, setData] = useState();

  useEffect(() => {
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
    };

    if (user) {
      fetchData();
    }
  }, [user, navigate]);

  return (
    <div className={styles.container}>
      {data ? (
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

          <div className={styles.horizontal_row}></div>

          <div>
            <h5>Quizzes for the selected categories will be live soon.</h5>
            <div className={styles.buttons}>
              {data?.quizCategory?.map((category) => (
                <button key={category}>{category}</button>
              ))}
            </div>
          </div>

          <div className={styles.horizontal_row}></div>

          <p className={styles.contact_line}>
            If any query feel free to contact us{' '}
            <a href="/contact">Click here!</a>
          </p>
        </div>
      ) : (
        <div className={styles.profile_container}>
          <h3>Loading....</h3>
        </div>
      )}
    </div>
  );
};

export default Index;
