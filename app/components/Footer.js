import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' href='/profile'>
            <Image
              src='/../public/logo.png'
              alt='TTN Logo'
              width={30}
              height={30}
              className='d-inline-block align-text-center'
            />
            <span className='text-white'>Traveling Teachers Network</span>
          </Link>
          <Link
            className='navbar-brand text-white'
            href='https://github.com/urbannomad94'
          >
            <Image
              src='/../public/github-mark-white.svg'
              alt='Github Logo'
              width={30}
              height={24}
              className='d-inline-block align-text-center'
            />
            Created By Aidan Williams
          </Link>
        </div>
      </nav>
    </footer>
  );
}
