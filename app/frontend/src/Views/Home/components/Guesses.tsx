import * as React from 'react';
import { getGuesses, submitGuess, getDetailedPost } from '../request';
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
    let correct = false;
    getDetailedPost(props.postId).then(res => {
      const possibleAns = res.data.location.split(',');
      const correctAns = possibleAns.find(((ans: any) => ans.trim().toLowerCase() === guess.trim().toLowerCase()));
      if (correctAns) {
        correct = true;
      } else {
        correct = false;
      }
      const formData = new FormData();
      guess && formData.append('guess', guess);
      props.postId && formData.append('image', String(props.postId));
      props.userId && formData.append('user', String(props.userId));
      formData.append('correct', String(correct));
      submitGuess(formData).then(() =>
        alert('Guess Submitted')
      ).catch(() =>
        alert('Something went wrong')
      );
      window.location.reload();
    });

  };

  return (
    <>
      {guesses.length > 0 && <div className='guesses'>
        {guesses.map((guess, i) => (
          <div key={i} className='guesses-ans'>
            <b>{guess.user.username}</b> : {guess.guess}
            {guess.correct && <span className='correct-guess'>Correct</span>}
          </div>
        ))}
      </div>}
      <form onSubmit={onSubmitHandler}>
        <input type='text' name='guess' placeholder='Guess this place...' required />
        <input type='submit' value='Guess' />
      </form>
    </>
  );
};

export default Guesses;