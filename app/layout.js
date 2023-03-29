import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Syne } from 'next/font/google';
const syne = Syne({
  weight: ['400', '700'],
  subsets: ['latin'],
});

import Footer from './components/Footer';

// export const metadata = {
//   title: 'Travelling Teachers Network',
//   description: 'This is a description',
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={syne.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
