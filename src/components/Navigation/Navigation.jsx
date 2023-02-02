// import { useAuth } from 'hooks';
// import { NavigationLink } from './Navigation.styled';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();

//   return (
//     <nav>
//       <NavigationLink to="/">Home</NavigationLink>
//       {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
//     </nav>
//   );
// };

import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </nav>
  );
};