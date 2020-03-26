import * as React from 'react';
import { getPosts } from './request';
import { AxiosResponse } from 'axios';
import { Post } from '../types';
import './styles.css';
import Guesses from './components/Guesses';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState([] as Post[]);
  React.useEffect(() => {
    getPosts().then((res: AxiosResponse) => setPosts(res.data));
  }, []);

  return (
    <div>
      <h2>Guess The Place</h2>
      {posts.map((post, i) =>
        <div key={i} className='post'>
          <img className='post-img' src={post.url} alt={`guess number ${i}`} />
          <div className='post-guesses'>
            <p>by: <b>{post.user.username}</b></p>
            <b>Guesses :</b>
            <Guesses imageId={post.id} />
          </div>
        </div>)}
    </div>
  );
};

export default Home;