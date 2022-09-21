import React, { useState } from 'react';
import styles from '../../Styles/pages/quiz/Quiz.module.css';

const Question = ({ quiz, question, setQuestion, quizes, answers }) => {
  const [state, setState] = useState(false);

  return (
    <div className={styles.quiz}>
      <h3>
        Question <span>{quiz?.id}</span>/{quizes?.length}
      </h3>
      <h4>{quiz?.question}</h4>

      {quiz?.options?.map((option) => (
        <p
          key={`${question}_${option}`}
          onClick={() => {
            answers[question] = option;
            setState(!state);
          }}
          className={answers[question] === option ? styles.active : ''}
        >
          {option}
        </p>
      ))}

      <div className={styles.buttons}>
        <button
          disabled={question === 0}
          onClick={() => {
            setQuestion(question - 1);
          }}
        >
          <i className="uil uil-previous"></i>
        </button>
        <button
          disabled={question === quizes?.length - 1}
          onClick={() => {
            setQuestion(question + 1);
          }}
        >
          <i className="uil uil-step-forward"></i>
        </button>
      </div>

      {question === quizes?.length - 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <button
            className={styles.submit}
            onClick={() => {
              // answers?.map((answer) => console.log(answer));
              console.log(answers);
            }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
