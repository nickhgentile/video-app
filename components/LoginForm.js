import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { updateName, updateRoom, updateToken } from '../store/reducers/room';

import Alert from './Alert';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (data) => {
    let token = await axios.post('/api/get_token', {
      user_name: data.name,
      room_name: data.room
    });

    dispatch(updateName(data.name));
    dispatch(updateRoom(data.room));
    dispatch(updateToken(token.data.token));

    router.push('/room');
  };

  return (
    <div className="px-4 mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <Alert></Alert>
        <Form
          onSubmit={onSubmit}
          submitText="Join"
          submitClass="btn-primary w-full"
        >
          <TextInput
            label="Name"
            name="name"
            rules={{ required: true }}
            placeholder="Your name"
          ></TextInput>
          <TextInput
            label="Room"
            name="room"
            rules={{ required: true }}
            placeholder="Room name"
          ></TextInput>
        </Form>
      </div>
    </div>
  );
}
