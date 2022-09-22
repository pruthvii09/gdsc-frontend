import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../hooks/useUserContext';
import styles from '../Styles/components/Layout.module.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const { user, dispatch } = useUserContext();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: 'LOGIN', payload: null });
  };

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
            <a href="/" onClick={() => setOpen(!open)}>
              Home
            </a>
          </li>
          <li>
            <a href="events" onClick={() => setOpen(!open)}>
              Events
            </a>
          </li>
          <li>
            <a href="team" onClick={() => setOpen(!open)}>
              Team
            </a>
          </li>
          {/* <li>
            <a href="quiz" onClick={() => setOpen(!open)}>
              Quiz
            </a>
          </li> */}
          <li>
            <a href="contact" onClick={() => setOpen(!open)}>
              Contact Us
            </a>
          </li>

          {user ? (
            <>
              <li>
                <a href="profile" onClick={() => setOpen(!open)}>
                  Profile
                </a>
              </li>
              <li>
                <Link onClick={handleLogout} className={styles.active}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <a
                href="signup"
                onClick={() => setOpen(!open)}
                className={styles.active}
              >
                Register
              </a>
            </li>
          )}
        </ul>
        <div className={styles.icon_div}>
          {user && (
            <a href="/profile">
              <i className={`uil uil-user-circle ${styles.account}`}></i>
            </a>
          )}
          <i
            className={`uil uil-bars ${styles.hamburger}`}
            onClick={() => setOpen(!open)}
          ></i>
        </div>
      </nav>

      {children}

      <footer className={styles.footer}>
        <img src="/images/logo.svg" alt="" />
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <span>
                <a href="/">Home</a>
              </span>
            </li>
            <li>
              <span>
                <a href="events">Events</a>
              </span>
            </li>
            <li>
              <span>
                <a href="team">Team</a>
              </span>
            </li>
            {/* <li>
              <span>
                <a href="quiz">Quiz</a>
              </span>
            </li> */}
            <li>
              <span>
                <a href="contact">Contact</a>
              </span>
            </li>
            <li>
              <span>
                <a href="signup">Register</a>
              </span>
            </li>
          </ul>
          <h3>Socials</h3>
          <div className={styles.socials}>
            <div className={styles.social}>
              <a href="https://www.instagram.com/gdsc_pesmcoe/" target="_blank">
                <i className="uil uil-instagram"></i>
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://www.linkedin.com/company/gdsc-pesmcoe/"
                target="_blank"
              >
                <i className="uil uil-linkedin-alt"></i>
              </a>
            </div>
            <div className={styles.social}>
              <a
                href="https://twitter.com/gdsc_pesmcoe?s=20&t=AXGA6MhC0e3y8NOBkUOjHA"
                target="_blank"
              >
                <i className="uil uil-twitter-alt"></i>
              </a>
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
