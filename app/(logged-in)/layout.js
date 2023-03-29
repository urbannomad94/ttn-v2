import HeaderLoggedIn from '../components/HeaderLoggedIn';

// export const metadata = {
//   title: 'Travelling Teachers Network',
//   description: 'This is a description',
// };

export default function LoggedInLayout({ children }) {
  return (
    <>
      <HeaderLoggedIn />
      {children}
    </>
  );
}
