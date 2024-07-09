import { ApiResponse } from '../types';

const data: ApiResponse = {
  response_code: 0,
  results: [
    {
      category: 'Geography',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Which UK country features a dragon on their flag?',
      correct_answer: 'Wales',
      incorrect_answers: ['England', 'North Ireland', 'Scotland'],
    },
    {
      category: 'Sports',
      type: 'multiple',
      difficulty: 'medium',
      question: 'Which team was the 2014-2015 NBA Champions?',
      correct_answer: 'Golden State Warriors',
      incorrect_answers: [
        'Cleveland Cavaliers',
        'Houston Rockets',
        'Atlanta Hawks',
      ],
    },
    {
      category: 'Entertainment: Television',
      type: 'multiple',
      difficulty: 'easy',
      question: 'Guy&#039;s Grocery Games is hosted by which presenter?',
      correct_answer: 'Guy Fieri',
      incorrect_answers: ['Guy Martin', 'Guy Ritchie', 'Ainsley Harriott'],
    },
    {
      category: 'Entertainment: Japanese Anime & Manga',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'The heroine of &quot;Humanity Has Declined&quot; is a mediator between humans and what?',
      correct_answer: 'Fairies',
      incorrect_answers: ['Elves', 'The Earth', 'Animals'],
    },
    {
      category: 'Science: Computers',
      type: 'multiple',
      difficulty: 'medium',
      question:
        'What was the first Android version specifically optimized for tablets?',
      correct_answer: 'Honeycomb',
      incorrect_answers: ['Eclair', 'Froyo', 'Marshmellow'],
    },
  ],
};

export default data;
