import Image from 'next/image';
import Link from 'next/link';

export default function HeaderLoggedOut() {
  return (
    <nav className='navbar navbar-light navbar-expand-md bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' href='/'>
          <Image
            src='/../public/logo.png'
            alt='TTN Logo'
            width={45}
            height={45}
            className='d-inline-block align-text-center'
          />
          <span className='text-white'>Traveling Teachers Network</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarSupportedContent'
        >
          <ul className='navbar-nav'>
            <li className='nav-item btn'>
              <Link
                className='nav-link btn btn-primary text-white px-3'
                aria-current='page'
                href='/login'
              >
                Login
              </Link>
            </li>
            <li className='nav-item btn'>
              <Link
                className='nav-link btn btn-primary text-white px-3'
                aria-current='page'
                href='/signup'
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
