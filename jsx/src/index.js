// import react and react-dom lib
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component
const App = () => {
  const buttonText = {text: 'Click me'};
  const labelText =  "Enter name:";
  const buttonStyle = {backgroundColor: 'blue', color: 'white', border: '1px solid red'};
  return (
    <div>
      <label className="label" htmlFor="name">{labelText}</label>
      <input id="name" type="text"/>
      <button style={buttonStyle}>
        {buttonText.text}
      </button>
    </div>
  )

};

// take the react component and show it on the screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);