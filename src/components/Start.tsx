import { QuizOptions } from '../types';

interface Props {
  onClick: () => void;
  quizOptions: QuizOptions;
  setQuizOptions: React.Dispatch<React.SetStateAction<QuizOptions>>
}

const Start = ({ onClick, quizOptions, setQuizOptions }: Props) => {
  return (
    <div className="start">
      <h1 className="start--title">Quizzical</h1>
      <div className="fields">
        <div className="field">
          <p>Number of Questions: </p>
          <input
            type="number"
            value={quizOptions.number}
            min={5}
            max={100}
            onChange={({ target: { value } }) =>
              setQuizOptions({ ...quizOptions, number: Number(value) })
            }
          />
        </div>
        <div>
          <p>Category:</p>
          <select
            name="category"
            value={quizOptions.category.toString()}
            onChange={({ target: { value } }) =>
              setQuizOptions({ ...quizOptions, category: value })
            }
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science &amp; Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
            <option value="32">Entertainment: Cartoon &amp; Animations</option>
          </select>
        </div>
        <div>
          <p>Difficulty:</p>
          <select
            name="difficulty"
            value={quizOptions.difficulty.toString()}
            onChange={({ target: { value } }) =>
              setQuizOptions({ ...quizOptions, difficulty: value })
            }
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <p>Type:</p>
          <select
            name="type"
            value={quizOptions.type.toString()}
            onChange={({ target: { value } }) =>
              setQuizOptions({ ...quizOptions, type: value })
            }
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>
      </div>
      <button onClick={onClick} className="start--btn">
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
