import * as React from 'react';
import { getPosts } from './request';
import { AxiosResponse } from 'axios';
import { Post } from '../types';
import './styles.css';
import Guesses from './components/Guesses';
import { Link } from 'react-router-dom';

interface HomeProps {
  isAuth: boolean;
}

const Home: React.FC<HomeProps> = ({isAuth}) => {
  const [posts, setPosts] = React.useState([] as Post[]);
  React.useEffect(() => {
    getPosts().then((res: AxiosResponse) => setPosts(res.data));
  }, []);

  return (
    isAuth ? <div>
    <h2>Guess The Place</h2>
    {posts.map((post, i) =>
      <div key={i} className='post'>
        <img className='post-img' src={post.url} alt={`guess number ${i}`} />
        <div className='post-guesses'>
          <p>Posted By: <b>{post.user.username}</b></p>
          <b>Guesses :</b>
          <Guesses postId={post.id} userId={post.user.id}/>
        </div>
      </div>)}
  </div> : <div className='home--nologin'>
    <h2>Welcome to the application</h2>
    <p>Please <Link to={'/login'}>Login</Link> or <Link to={'/signup'}>Sign Up</Link></p>
  </div>
  );
};

export default Home;