import he from 'he';
import { nanoid } from 'nanoid';

interface Props {
  question: String;
  index: number;
  options: String[];
  selectOption: (arg0: number, arg1: String) => void;
  selectedOption: String;
  correctAnswer: String;
  submitted: boolean;
  setIndexesSet: React.Dispatch<React.SetStateAction<Set<number>>>;
}

const QuizItem = ({
  question,
  index,
  options,
  selectOption,
  selectedOption,
  correctAnswer,
  submitted,
  setIndexesSet
}: Props) => {
  const handleClick = (option: String) => {
    selectOption(index, option);
    setIndexesSet(prev => prev.add(index));
  };

  return (
    <div className="quizitem">
      <p className="quizitem-qs">{he.decode(question.toString())}</p>
      <div className="quizitem-options">
        {options.map((option) => (
          <div
            key={nanoid()}
            className={`quizitem-option ${option == selectedOption && 'selected'} ${submitted && option == correctAnswer && 'correct'} ${submitted && option == selectedOption && option != correctAnswer && 'incorrect'} ${submitted && option != correctAnswer && 'faded'}`}
            onClick={!submitted ? () => handleClick(option) : () => {}}
          >
            {he.decode(option.toString())}
          </div>
        ))}
      </div>
      <div className="line" />
    </div>
  );
};

export default QuizItem;
