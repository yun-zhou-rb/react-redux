import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {lat: null, long: null, errorMessage: ''};

  componentDidMount() {
    console.log("My component was rendered to the screen");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude, long: position.coords.longitude});
      },
      (err) => {
        console.log(err);
        this.setState({errorMessage: err.message})
      }
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("My component was updated - it rendered");

  }
  renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;

    }
    return <Spinner message={'Loading season now ...'}/>;
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));