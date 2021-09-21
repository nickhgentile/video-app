import LoginForm from '../components/LoginForm';

export default function Home() {
  return (
    <>
      <div className="min-h-full bg-gray-50 flex flex-col justify-center py-48 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">
          Join a Room
        </h1>

        <LoginForm></LoginForm>
      </div>
    </>
  );
}
