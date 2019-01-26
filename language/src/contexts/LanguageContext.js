import React from 'react';

const Context = React.createContext('chinese');

export class LanguageStore extends React.Component {
  state = {language: 'chinese'};
  onLanguageChange = (language) => {
    this.setState({language});
  }

  render() {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    );
  }

}

export default Context;
