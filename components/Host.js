import Video from './Video';

export default function Host({ src = 'videos/video1.mp4' }) {
  return (
    <div className="relative z-0 host-video-wrapper">
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        src={src}
        className="fixed top-0 left-0 object-cover w-screen h-screen"
      ></video>
    </div>
  );
}
