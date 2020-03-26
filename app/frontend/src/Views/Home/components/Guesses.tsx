import * as React from 'react';
import { getGuesses } from '../request';
import { AxiosResponse } from 'axios';
import { Guess } from '../../types';

interface GuessesProps {
  imageId: number;
}

const Guesses: React.FC<GuessesProps> = (props) => {
  const [guesses, setGuesses] = React.useState([] as Guess[]);
  React.useEffect(() => {
    getGuesses(props.imageId).then((res: AxiosResponse) => setGuesses(res.data));
  }, [props.imageId]);

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