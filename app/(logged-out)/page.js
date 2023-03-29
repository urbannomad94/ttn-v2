import Image from 'next/image';
// import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <main className='container text-center'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-9'>
            <h1>Traveling Teachers Network</h1>
            <p className='text-start'>
              Hey international school teachers! We know you like to travel! And
              who doesn’t like saving money? Traveling Teachers Network allows
              you to connect with other international teachers to arrange house
              swaps. Apply today to become a verified member and start planning
              your next trip!
            </p>
            <a href='/signup'>
              <button className='btn btn-outline-success'>Sign Up Now!</button>
            </a>
          </div>
          <div className='col'>
            <Image
              src='/../public/logo.png'
              width={300}
              height={300}
              alt='TTN Logo'
            />
          </div>
        </div>
      </main>
    </>
  );
}
