import React from 'react';
import Header from '../../Components/Header';
import styles from '../../Styles/pages/contact/Contact.module.css';

const index = () => {
  return (
    <div className={styles.wrapper}>
      <Header>
        <h1 className={styles.header_heading}>
          <span style={{ color: '#2681f4' }}>Co</span>
          <span style={{ color: '#019b4d' }}>nta</span>
          <span style={{ color: '#f7b401' }}>ct</span>
          <span style={{ color: '#f62b24' }}> Us</span>
        </h1>
        <p className={styles.contact_header_p}>
          Follow this page for the most recent updates and information on Google
          Developer Technologies.
        </p>
      </Header>

      <div className={styles.main_div}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.left_side}>
              <div className={`${styles.address} ${styles.details}`}>
                <i className="bx bxs-location-plus"></i>
                <div className={styles.topic}>Address</div>
                <div className={styles.text_one}>PES MCOE</div>
                <div className={styles.text_two}>
                  1186/A, Off J.M. Road, Shivajinagar, Pune, Maharashtra Pin-
                  411005.
                </div>
              </div>
              <div className={`${styles.phone} ${styles.details}`}>
                <i className="bx bxl-instagram-alt"></i>
                <div className={styles.topic}>Instagram</div>
                <div className={styles.text_one}>gdscpesmcoe</div>
                {/* <div className={styles.text_two}>+91 7859845264</div> */}
              </div>
              <div className={`${styles.email} ${styles.details}`}>
                <i className="bx bxs-envelope"></i>
                <div className={styles.topic}>Email</div>
                <div className={styles.text_one}>gdscpesmcoe@gmail.com</div>
              </div>
            </div>
            <div className={styles.right_side}>
              <div className={styles.topic_text}>Send us a message</div>
              <h1>
                <span style={{ color: '#2681f4' }}>Co</span>
                <span style={{ color: '#019b4d' }}>nta</span>
                <span style={{ color: '#f7b401' }}>ct</span>
                <span style={{ color: '#f62b24' }}> Us</span>
              </h1>

              <form action="#">
                <div className={styles.input_box}>
                  <input type="text" placeholder="Enter your name"></input>
                </div>
                <div className={styles.input_box}>
                  <input type="text" placeholder="Enter your email"></input>
                </div>
                <div className={`${styles.input_box} ${styles.message_box}`}>
                  <textarea placeholder="Write something...."></textarea>
                </div>
                <div className={styles.button}>
                  <input type="button" value="Send Now"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
