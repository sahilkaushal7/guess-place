import * as React from 'react';
import { getGuesses, submitGuess } from '../request';
import { AxiosResponse } from 'axios';
import { Guess } from '../../types';

interface GuessesProps {
  postId: number;
  userId: number;
}

const Guesses: React.FC<GuessesProps> = (props) => {
  const [guesses, setGuesses] = React.useState([] as Guess[]);
  React.useEffect(() => {
    getGuesses(props.postId).then((res: AxiosResponse) => setGuesses(res.data));
  }, [props.postId]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    const guess = e.target.elements.guess.value;
    const formData = new FormData();
    guess && formData.append('guess', guess);
    props.postId && formData.append('image', String(props.postId));
    props.userId && formData.append('user', String(props.userId));
    submitGuess(formData);
    alert('Guess Submitted');
  };

  return (
    <div>
      {guesses.map((guess, i) => (
        <div key={i}>
          <p>{guess.user.username} : {guess.guess}</p>
        </div>
      ))}
      <form onSubmit={onSubmitHandler}>
        <input type='text' name='guess' placeholder='Guess this place...' />
        <input type='submit' value='Guess' />
      </form>
    </div>
  );
};

export default Guesses;