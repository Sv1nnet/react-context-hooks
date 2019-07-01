import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth} onKeyPress={toggleAuth} role="button" tabIndex={0}>
        {isAuthenticated ? 'Logged in' : 'Logged out'}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
// class Navbar extends React.Component {
//   render() {
//     return (
//       <AuthContext.Consumer>{authContext => (
//         <ThemeContext.Consumer>{(context) => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           const { isLightTheme, light, dark } = context;
//           const theme = isLightTheme ? light : dark;

//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <div onClick={toggleAuth} onKeyPress={toggleAuth} role="button" tabIndex={0}>
//                 {isAuthenticated ? 'Logged in' : 'Logged out'}
//               </div>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}
//         </ThemeContext.Consumer>
//       )}
//       </AuthContext.Consumer>
//     );
//   }
// }

export default Navbar;
