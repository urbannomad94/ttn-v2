import HeaderLoggedOut from '../components/HeaderLoggedOut';

// export const metadata = {
//   title: 'Travelling Teachers Network',
//   description: 'This is a description',
// };

export default function LoggedOutLayout({ children }) {
  return (
    <>
      <HeaderLoggedOut />
      {children}
    </>
  );
}
