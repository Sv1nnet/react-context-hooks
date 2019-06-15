import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  }

  toggleTheme = () => {
    this.setState(state => ({ isLightTheme: !state.isLightTheme }));
  }

  render() {
    const { state, props, toggleTheme } = this;
    return (
      <ThemeContext.Provider value={{ ...state, toggleTheme }}>
        {props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
