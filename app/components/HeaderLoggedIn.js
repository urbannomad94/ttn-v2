import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';

export default function HeaderLoggedIn() {
  return (
    <>
      <nav className='navbar navbar-light navbar-expand-md sticky-top'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/profile'>
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
              <li className='nav-item'>
                <Link
                  className='nav-link px-3 text-white'
                  aria-current='page'
                  href='/feed'
                >
                  Feed
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link px-3 text-white'
                  aria-current='page'
                  href='/profile'
                >
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link px-3 text-white'
                  aria-current='page'
                  href='/favorites'
                >
                  Favorites
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link px-3 text-white'
                  data-bs-toggle='modal'
                  data-bs-target='#modal'
                  aria-current='page'
                  href='#'
                >
                  Create Listing
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link px-3 mx-1 btn btn-danger text-white'
                  aria-current='page'
                  href='/logout'
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal />
    </>
  );
}
