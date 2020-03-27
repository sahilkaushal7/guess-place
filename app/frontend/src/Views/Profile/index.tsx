import * as React from 'react';
import { getProfile, updateProfile } from './requests';
import { AxiosResponse } from 'axios';
import { UserProfile } from '../types';
import './styles.css';

interface ProfileProps {
  urlParams: {
    id?: number;
  },
}

const Profile: React.FC<ProfileProps> = ({ urlParams: { id } }) => {
  const [profile, setProfile] = React.useState({} as UserProfile);
  React.useEffect(() => {
    if (id) {
      getProfile(id).then((res: AxiosResponse) => setProfile(res.data))
    }
  }, [id]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const place = e.target.elements.place.value;
    const formData = new FormData();
    name && formData.append('name', name);
    age && formData.append('age', age);
    place && formData.append('place', place);
    if (profile.id) {
      updateProfile(profile.id, formData).then(() => {
        alert('Profile Submitted Successfully')
        window.location.reload();
      }).catch(() =>
        alert('Something Went Wrong!')
      );
    }
  }
  return (
    <div className='userprofile'>
      <h3>Profile information</h3>
      <table>
        <tbody>
          {profile.name && <tr>
            <td><b>Name: </b></td>
            <td>{profile.name}</td>
          </tr>}
          {profile.age && <tr>
            <td><b>Age: </b></td>
            <td>{profile.age}</td>
          </tr>}
          {profile.place && <tr>
            <td><b>Place: </b></td>
            <td>{profile.place}</td>
          </tr>}
          {profile.user && profile.user.username && <tr>
            <td><b>Username: </b></td>
            <td>{profile.user.username}</td>
          </tr>}
        </tbody>
      </table>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        Update Your Information
          <input type={'text'} name={'name'} placeholder={'Enter your name'} required />
        <input type={'text'} name={'place'} placeholder={'Enter your place'} required />
        <input type={'number'} name={'age'} placeholder={'Enter your age'} required />
        <input type={'submit'} name={'Update'} />
        <br />
      </form>
    </div>
  );
}
export default Profile;