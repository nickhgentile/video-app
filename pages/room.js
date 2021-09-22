import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import Host from '../components/Host';
import Chat from '../components/Chat';
import Moderators from '../components/Moderators';
import Participants from '../components/Participants';
import Controls from '../components/Controls';
import Video from '../components/Video';

export default function Room() {
  const { token } = useSelector((state) => state.room);
  const router = useRouter();

  useEffect(() => {
    // if (!token) {
    //   router.push('/');
    // }
  }, []);

  return (
    <>
      <Host></Host>
      <Chat></Chat>
      {/* <Video id="video1"></Video>
      <Video id="video2"></Video> */}
      <Moderators></Moderators>
      <Participants></Participants>
      {/* <Controls></Controls> */}
    </>
  );
}
