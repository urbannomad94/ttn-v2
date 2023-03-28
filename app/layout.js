import './globals.css';
import 'bootstrap/dist/css/bootstrap.css';

import Footer from './components/Footer';

export const metadata = {
  title: 'Travelling Teachers Network',
  description: 'This is a description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
