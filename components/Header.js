import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from './Link';

export default function Header() {
  return (
    <header className="bg-black">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-500 flex items-center"
            >
              <FontAwesomeIcon icon={['fas', 'home']} className="w-6" />{' '}
              <span className="ml-2 mt-1">Test</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
