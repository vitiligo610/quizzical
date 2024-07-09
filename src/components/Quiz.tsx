import { nanoid } from 'nanoid';
import QuizItem from './QuizItem';
import React, { useEffect, useState } from 'react';
import { ApiResponse, QuizItem as Item, QuizOptions } from '../types';
import { shuffle } from '../utils';

interface Props {
  quizOptions: QuizOptions;
  setStart: React.Dispatch<React.SetStateAction<boolean>>
}

const Quiz = ({ quizOptions, setStart }: Props) => {
  const [items, setItems] = useState<Item[]>([]);
  const [options, setOptions] = useState<String[][]>(
    Array(items.length).fill([])
  );
  const [selectedOptions, setSelectedOptions] = useState<String[]>(
    Array(items.length).fill('')
  );
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const[indexesSet, setIndexesSet] = useState<Set<number>>(new Set());

  const { number, category, difficulty, type } = quizOptions;
  const url = 'https://opentdb.com/api.php?amount=' + number + '&category=' + category + '&difficulty=' + difficulty + '&type=' + type;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (data.response_code == 5) {
          setError(true);
          return;
        }
        setItems(data.results);
        setOptions(Array(data.results.length).fill([]));
        setSelectedOptions(Array(data.results.length).fill(''));
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    console.log('items are ', items);
    console.log('options are ', options);
    items.forEach((item, index) => {
      const { correct_answer, incorrect_answers } = item;
      setOptions((prev) => [
        ...prev.slice(0, index),
        shuffle(incorrect_answers.concat(correct_answer)),
        ...prev.slice(index + 1),
      ]);
    });
  }, [items]);

  const handleClick = () => {
    if (submitted) {
      items.forEach((item, index) => {
        const { correct_answer, incorrect_answers } = item;
        setOptions((prev) => [
          ...prev.slice(0, index),
          shuffle(incorrect_answers.concat(correct_answer)),
          ...prev.slice(index + 1),
        ]);
      });
      setSelectedOptions(Array(items.length).fill(''));
      setScore(0);
      setSubmitted(false);
      setStart(false);
      return;
    }

    let correctAnswers = 0;
    items.forEach((item, index) => {
      if (item.correct_answer == selectedOptions[index]) correctAnswers++;
    });

    setScore(correctAnswers);
    setSubmitted(true);
  };

  const selectOption = (index: number, option: String) => {
    setSelectedOptions((prev) => [
      ...prev.slice(0, index),
      option,
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <div className="quiz">
      {loading && !error && <h1>Loading...</h1>}
      {!loading && error && <h1>API Error! Please reload page</h1>}
      {!loading && !error && items.map((item, index) => (
        <QuizItem
          key={nanoid()}
          question={item.question}
          index={index}
          options={options[index]}
          selectOption={selectOption}
          selectedOption={selectedOptions[index]}
          correctAnswer={item.correct_answer}
          submitted={submitted}
          setIndexesSet={setIndexesSet}
        />
      ))}
      <div className="bottom-bar">
        {submitted && (
          <p>
            You scored {score}/{items.length} correct answers
          </p>
        )}
        <button className="quiz--btn-check" onClick={handleClick} disabled={indexesSet.size != items.length}>
          {!submitted ? 'Check Answers' : 'Play Again'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
