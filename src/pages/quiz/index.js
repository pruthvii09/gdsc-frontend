import React, { useState, useEffect } from 'react';
import Question from '../../Components/quiz/Question';
import styles from '../../Styles/pages/quiz/Quiz.module.css';
import { useUserContext } from '../../hooks/useUserContext';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Dialog from '../../Components/Dialog';

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

  const [openDialog, setOpenDialog] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
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
        setStartExam(true);
        setAnswers(Array.from({ length: json?.quizzes?.length }));
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
    </div>
  );
};

export default Index;
