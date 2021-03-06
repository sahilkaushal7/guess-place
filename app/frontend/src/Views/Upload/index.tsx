import * as React from 'react';
import './styles.css';
import { postImage } from './requests';

interface UploadProps {
  urlParams: {
    id?: number;
  },
  history: any;
}

const Upload: React.FC<UploadProps> = (props) => {
  const [image, setImage] = React.useState();

  const handleSubmit = (e: any) => {
    const userId = props.urlParams.id;
    const location = e.target.elements.location.value;
    const formData = new FormData();
    if (image) {
      formData.append('url', image!, image!.name);
    }
    location && formData.append('location', location);

    if (userId) {
      formData.append('user', String(userId));
      postImage(formData);
    }
    props.history.push('/');
    window.location.reload();
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
        <input
          type={'text'}
          name={'location'}
          placeholder={'Enter possible location seperated by `,`'}
          required
        />
        <input
          type={'file'}
          accept={"image/png, image/jpeg"}
          onChange={handleImageChange}
          required
        />
        <input type={'submit'} name={'Upload'} />
        <br />
      </form>
    </div >
  );
};

export default Upload;