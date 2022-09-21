import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/components/Layout.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src="/images/logo.svg" alt="" />
        </Link>

        <ul className={open ? styles.active_navbar : ''}>
          <i
            className={`uil uil-times-circle ${styles.close_icon}`}
            onClick={() => setOpen(!open)}
          ></i>
          <li>
            <Link to="/" onClick={() => setOpen(!open)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="events" onClick={() => setOpen(!open)}>
              Events
            </Link>
          </li>
          <li>
            <Link to="team" onClick={() => setOpen(!open)}>
              Team
            </Link>
          </li>
          <li>
            <Link to="quiz" onClick={() => setOpen(!open)}>
              Quiz
            </Link>
          </li>
          <li>
            <Link to="contact" onClick={() => setOpen(!open)}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="signup"
              onClick={() => setOpen(!open)}
              className={styles.active}
            >
              Register
            </Link>
          </li>
        </ul>
        <i
          className={`uil uil-bars ${styles.hamburger}`}
          onClick={() => setOpen(!open)}
        ></i>
      </nav>

      {children}

      <footer className={styles.footer}>
        <img src="/images/logo.svg" alt="" />
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <span>
                <Link to="/">Home</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="events">Events</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="team">Team</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="quiz">Quiz</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="contact">Contact</Link>
              </span>
            </li>
            <li>
              <span>
                <Link to="signup">Register</Link>
              </span>
            </li>
          </ul>
          <h3>Socials</h3>
          <div className={styles.socials}>
            <div className={styles.social}>
              <i className="uil uil-instagram"></i>
            </div>
            <div className={styles.social}>
              <i className="uil uil-linkedin-alt"></i>
            </div>
            <div className={styles.social}>
              <i className="uil uil-twitter-alt"></i>
            </div>
          </div>
        </div>
        <p>
          <i className="uil uil-copyright"></i> GDSC-PES MCOE
        </p>
      </footer>
    </div>
  );
};

export default Layout;
