import React, { useState, useEffect } from 'react';
import Question from '../../Components/quiz/Question';
import styles from '../../Styles/pages/quiz/Quiz.module.css';
import formStyles from '../../Styles/pages/signup/Signup.module.css';
import instructionStyle from '../../Styles/components/Instruction.module.css';
import { useUserContext } from '../../hooks/useUserContext';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Dialog from '../../Components/Dialog';
import Spinner from '../../Components/Spinner';

const FormComponent = ({ setStartExam, form, setForm }) => {
  const { category } = useParams();

  const [error, setError] = useState('');
  const [disableSignup, setDisableSignup] = useState(false);

  const [password, setPassword] = useState('');

  const handleCheckPassword = async () => {
    setDisableSignup(true);
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/api/score/get-password/${category}`,
      {
        method: 'GET',
      }
    );

    const json = await response.json();

    if (response.ok) {
      if (password === json) {
        setForm(false);
        setStartExam(true);
      } else {
        setDisableSignup(false);
        return setError('Password does not matches');
      }
    }

    if (!response.ok) {
      setError(json.error);
    }

    setDisableSignup(false);
  };

  return (
    <>
      {form && (
        <div className={formStyles.container} style={{ marginTop: '-40px' }}>
          <div className={formStyles.form} style={{ marginTop: '150px' }}>
            <h2>{category}</h2>

            <div className={instructionStyle.instruction_box}>
              <h4>Instruction for Quiz</h4>
              <p>
                <b>
                  1&#41; .Please don't reload your page while attempting
                  quizzes.
                </b>
              </p>
              <div className={instructionStyle.submit}>
                2&#41;<div className={instructionStyle.submitted}></div>{' '}
                <p>will indicate solved question</p>
              </div>
              <div className={instructionStyle.submit}>
                3&#41;<div className={instructionStyle.incomplete}></div>{' '}
                <p>will indicate unsolved question</p>
              </div>
            </div>

            <div>
              <h4>Enter Password To Start Exam</h4>
              <div className={formStyles.field}>
                <b>Password *</b>
                <input
                  type="text"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {error && (
                <div className={styles.error}>
                  {error}{' '}
                  <i
                    className="uil uil-times-circle"
                    onClick={() => setError('')}
                  ></i>
                </div>
              )}
              <button
                onClick={handleCheckPassword}
                disabled={disableSignup}
                className={disableSignup ? styles.disabled : ''}
              >
                {disableSignup ? (
                  <>
                    {' '}
                    Start Exam <Spinner />
                  </>
                ) : (
                  'Start Exam'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Index = () => {
  const navigate = useNavigate();

  const { userData } = useUserContext();

  const { category } = useParams();

  const [quizes, setQuizes] = useState();

  const [question, setQuestion] = useState(0);

  const [answers, setAnswers] = useState();

  const [error, setError] = useState('');

  const [liveError, setLiveError] = useState('');
  const [p, setP] = useState('');
  const [startExam, setStartExam] = useState(false);

  const [form, setForm] = useState('');

  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setLoading(true);
    setError('');

    window.scrollTo(0, 0);

    const getQuestions = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/quizzes/${category}`,
        {
          method: 'GET',
        }
      );

      const json = await response.json();

      if (response.ok) {
        setQuizes(json.quizzes);
        setForm(true);
        setAnswers(Array.from({ length: json?.quizzes?.length }));
        setLoading(false);
      }
    };

    const checkExamIsLive = async () => {
      setLiveError('');
      setP('');

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/score/check-live/${category}`,
        {
          method: 'GET',
        }
      );

      const json = await response.json();

      if (response.ok) {
        getQuestions();
      }
      if (!response.ok) {
        setLiveError(json.error);
        setP(json.p);
        setLoading(false);
      }
    };

    const checkElligibility = async () => {
      setLiveError('');

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URI}/api/score/check-done/${userData?._id}?category=${category}`,
        {
          method: 'GET',
        }
      );

      const json = await response.json();

      if (response.ok) {
        checkExamIsLive();
      }
      if (!response.ok) {
        setLiveError(json.error);
        setLoading(false);
      }
    };

    if (userData) {
      checkElligibility();
    }
  }, [userData, pathname]);

  // Check result and save to backend
  const handleResult = async () => {
    setError('');

    let score = 0;

    quizes.map((quiz) => {
      if (!answers[quiz.id - 1]) {
        setError('Please attempt all the questions!');
        return;
      }
      if (quiz.answer === answers[quiz.id - 1]) {
        score++;
      }
    });

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/api/score/${category}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: userData._id,
          name: userData.name,
          score: score,
        }),
      }
    );

    const json = await response.json();

    if (response.ok) {
      setOpenDialog(true);

      setTimeout(() => {
        setOpenDialog(false);
        navigate('/profile');
      }, 4000);
    }
    if (!response.ok) {
      console.log(json.error);
    }
  };

  return (
    <div className={styles.container}>
      {liveError && (
        <div
          className={`${styles.quizes_container} ${styles.error_box}`}
          style={{ margin: '150px 10px', marginBottom: '100px' }}
        >
          <div>
            <h3>{liveError}</h3>
            {p && <p>{p}</p>}
            <button>Contact Us</button>
          </div>
        </div>
      )}

      {loading ? (
        <h2
          style={{
            margin: '200px 10px 150px',
            color: '#333',
            textAlign: 'center',
            fontWeight: '300',
          }}
        >
          Loading {category} quiz, Please wait!
        </h2>
      ) : (
        <>
          <FormComponent
            setStartExam={setStartExam}
            form={form}
            setForm={setForm}
          />

          <>
            {startExam && (
              <div className={styles.quizes_container}>
                <h2>{category}</h2>

                <div className={styles.all_questions}>
                  {answers?.map((answer, index) => (
                    <div
                      className={`${styles.question_box} ${
                        answer ? styles.done : ''
                      }`}
                      onClick={() => setQuestion(index)}
                      key={`${index}_${answers}`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>

                <Question
                  quiz={quizes[question]}
                  question={question}
                  setQuestion={setQuestion}
                  quizes={quizes}
                  answers={answers}
                  handleResult={handleResult}
                  error={error}
                  setError={setError}
                />
              </div>
            )}
          </>

          <Dialog
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            title={`Exam Submitted`}
            children={
              <div>
                <p>You exam for {category} is submitted successfully!</p>
                <p>Your result will be declare soon!</p>
                <button className={styles.button}>
                  <Link to="/profile" style={{ color: 'white' }}>
                    Go To Profile
                  </Link>
                </button>
              </div>
            }
          />
        </>
      )}
    </div>
  );
};

export default Index;
