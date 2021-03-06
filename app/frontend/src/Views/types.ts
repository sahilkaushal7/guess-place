interface User {
  id: number;
  username: string;
}

export interface Post {
  url: string;
  location: string;
  id: number;
  user: User;
}

export interface Guess {
  guess: string;
  id: number;
  user: User;
  correct: boolean;
}

export interface UserProfile {
  name: string;
  age: number;
  place: string;
  user: User;
  id: number;
}