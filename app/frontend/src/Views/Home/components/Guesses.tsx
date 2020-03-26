import * as React from 'react';
import { getGuesses } from '../request';
import { AxiosResponse } from 'axios';
import { Guess } from '../../types';

interface GuessesProps {
  postId: number;
}

const Guesses: React.FC<GuessesProps> = (props) => {
  const [guesses, setGuesses] = React.useState([] as Guess[]);
  React.useEffect(() => {
    getGuesses(props.postId).then((res: AxiosResponse) => setGuesses(res.data));
  }, [props.postId]);

  return (
    <div>
      {guesses.map((guess, i) => (
        <div key={i}>
          <p>{guess.user.username} : {guess.guess}</p>
        </div>
      ))}
    </div>
  );
};

export default Guesses;