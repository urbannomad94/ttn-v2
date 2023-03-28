import Image from 'next/image';
export default function Footer() {
  return (
    <footer>
      <nav class='navbar navbar-expand-lg bg-light'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='/profile'>
            <Image
              src='/../public/logo.png'
              alt='TTN Logo'
              width='30'
              height='30'
              class='d-inline-block align-text-center'
            />
            <span class='text-white'>Traveling Teachers Network</span>
          </a>
          <a
            class='navbar-brand text-white'
            href='https://github.com/urbannomad94'
          >
            <Image
              src='/../public/github-mark-white.svg'
              alt='Github Logo'
              width='30'
              height='24'
              class='d-inline-block align-text-center'
            />
            Created By Aidan Williams
          </a>
        </div>
      </nav>
    </footer>
  );
}
