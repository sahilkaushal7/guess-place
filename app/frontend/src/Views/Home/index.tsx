import * as React from 'react';
import { getPosts } from './request';
import { AxiosResponse } from 'axios';

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    getPosts().then((res: AxiosResponse) => setPosts(res.data));
  }, []);

  return (
    <div>{JSON.stringify(posts)}</div>
  );
};

export default Home;