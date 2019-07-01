import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false,
  }

  toggleAuth = () => {
    this.setState(state => ({ isAuthenticated: !state.isAuthenticated }));
  }

  render() {
    const { state, props, toggleAuth } = this;
    return (
      <AuthContext.Provider value={{ ...state, toggleAuth }}>
        {props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
