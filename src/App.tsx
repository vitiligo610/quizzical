import { useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import { QuizOptions } from './types';

const App = () => {
  const [start, setStart] = useState(false);
  const [quizOptions, setQuizOptions] = useState<QuizOptions>({
    number: 5,
    category: '',
    difficulty: '',
    type: '',
  });

  const startQuiz = () => {
    console.log(quizOptions);
    setStart(true);
  };

  return (
    <div className="container">
      {!start ? (
        <Start
          quizOptions={quizOptions}
          setQuizOptions={setQuizOptions}
          onClick={startQuiz}
        />
      ) : (
        <Quiz quizOptions={quizOptions} setStart={setStart} />
      )}
    </div>
  );
};

export default App;
