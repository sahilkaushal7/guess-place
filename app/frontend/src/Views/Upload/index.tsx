import * as React from 'react';
import './styles.css';
import { postImage } from './requests';

interface UploadProps {
  urlParams: {
    userId?: number;
  },
  history: any;
}

const Upload: React.FC<UploadProps> = (props) => {
  const [image, setImage] = React.useState();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const userId = props.urlParams.userId;
    const location = e.target.elements.location.value;
    const answers = e.target.elements.answers.value;
    const formData = new FormData();
    if (image) {
      formData.append('url', image!, image!.name);
    }
    location && formData.append('location', location);
    answers && formData.append('answers', answers);

    if (userId) {
      formData.append('user', String(userId));
      postImage(formData);
    }
    props.history.push('/');
  }

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={'upload'}>
      <form
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>Please fill in the Upload details</p>
        <input type={'text'} name={'location'} placeholder={'Enter location'} />
        <input type={'text'} name={'answers'} placeholder={'Enter possible answers'} />
        <input
          type={'file'}
          accept={"image/png, image/jpeg"}
          onChange={handleImageChange}
        />
        <input type={'submit'} name={'Upload'} />
        <br />
      </form>
    </div >
  );
};

export default Upload;