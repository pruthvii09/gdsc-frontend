import React, { useState } from 'react';
import Question from '../../Components/quiz/Question';
import Header from '../../Components/Header';
import styles from '../../Styles/pages/quiz/Quiz.module.css';

const Index = () => {
  const quizes = [
    {
      id: 1,
      question:
        'True or false? To preview composable functions, a developer must deploy the app to an Android device or emulator.',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      id: 2,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 3,
      question:
        'Which of the following are common strategies for integrating Jetpack Compose with an existing Android app?',
      options: [
        'Integrate Compose in new screens',
        'Migrate in bulk with an automated tool',
        'Use Compose as a replacement for the View system for part of an existing screen',
        'Migrate whole fragments or screens to Compose one at a time',
      ],
      answer:
        'Use Compose as a replacement for the View system for part of an existing screen',
    },
    {
      id: 4,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 5,
      question:
        '___ tell a UI element how to lay out, display, or behave within its parent layout.',
      options: ['Modifier parameters', 'Composers', 'Kotlin functions', 'CSS'],
      answer: 'CSS',
    },
    {
      id: 6,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 7,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 8,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 9,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 10,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 11,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 12,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 13,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 14,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 15,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 16,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 17,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 18,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 19,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 20,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
  ];

  const [question, setQuestion] = useState(0);

  const INITIAL_LIST = Array.from({ length: quizes?.length });

  const [answers, setAnswers] = useState(INITIAL_LIST);

  const [error, setError] = useState('');

  const handleResult = () => {
    setError('');

    let score = 0;

    console.log(answers);

    quizes.map((quiz) => {
      if (!answers[quiz.id - 1]) {
        setError('Please attempt all the questions!');
        return;
      }
      if (quiz.answer === answers[quiz.id - 1]) {
        score++;
      }
    });

    console.log(score);
  };

  return (
    <div className={styles.container}>
      <div className={styles.quizes_container}>
        <h2>Quiz Category</h2>

        <div className={styles.all_questions}>
          {answers?.map((answer, index) => (
            <div
              className={`${styles.question_box} ${answer ? styles.done : ''}`}
              onClick={() => setQuestion(index)}
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
    </div>
  );
};

export default Index;
