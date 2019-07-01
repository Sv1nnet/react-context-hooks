import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';


const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button type="button" onClick={toggleTheme}>Toggle the theme</button>
  );
};

// class ThemeToggle extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     const { toggleTheme } = this.context;

//     return (
//       <button type="button" onClick={toggleTheme}>Toggle the theme</button>
//     );
//   }
// }

export default ThemeToggle;
