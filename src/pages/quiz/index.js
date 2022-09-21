import React, { useState } from 'react';
import Question from '../../Components/quiz/Question';
import Header from '../../Components/Header';
import styles from '../../Styles/pages/quiz/Quiz.module.css';

const Index = () => {
  const quizes = [
    {
      id: 1,
      question:
        '___ tell a UI element how to lay out, display, or behave within its parent layout.',
      options: ['Modifier parameters', 'Composers', 'Kotlin functions', 'CSS'],
      answer: 'CSS',
    },
    {
      id: 2,
      question:
        'True or false? To preview composable functions, a developer must deploy the app to an Android device or emulator.',
      options: ['True', 'False'],
      answer: 'True',
    },
    {
      id: 3,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 4,
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
      id: 5,
      question:
        '___ layout allows you to implement a UI with the basic Material Design layout structure.',
      options: ['TopAppBar', 'ConstraintLayout', 'Scaffold', 'Column'],
      answer: 'TopAppBar',
    },
    {
      id: 6,
      question:
        '___ tell a UI element how to lay out, display, or behave within its parent layout.',
      options: ['Modifier parameters', 'Composers', 'Kotlin functions', 'CSS'],
      answer: 'CSS',
    },
  ];

  const [question, setQuestion] = useState(0);

  const INITIAL_LIST = Array.from({ length: quizes?.length });

  const [answers, setAnswers] = useState(INITIAL_LIST);

  return (
    <div className={styles.container}>
      <Header>
        <h1>
          <span className={styles.blue}>Q</span>
          <span className={styles.green}>ui</span>
          <span className={styles.red}>z</span>
        </h1>
        <p className={styles.header_paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          assumenda doloribus rem sit, neque qui. Nostrum illo sint ratione
          maxime.
        </p>
      </Header>

      <div className={styles.quizes_container}>
        <h2>Quiz Category</h2>
        <Question
          quiz={quizes[question]}
          question={question}
          setQuestion={setQuestion}
          quizes={quizes}
          answers={answers}
        />
      </div>
    </div>
  );
};

export default Index;
