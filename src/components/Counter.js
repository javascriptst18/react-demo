import React from 'react';

function counter(counter) {
  return function (previousState) {
    switch (counter) {
      case 'INC':
        return { clicks: previousState.clicks + 1 }
      case 'DEC':
        return { clicks: previousState.clicks - 1 }
    }
  }
}

class App extends React.Component {

  state = {
    clicks: 0
  }

  increaseClicks = () => this.setState(counter('INC'));
  decreaseClicks = () => this.setState(counter('DEC'));

  render() {
    return (
      <div>
        <p>{this.state.clicks.toFixed(0)}</p>
        <button onClick={this.increaseClicks}>Increment</button>
        <button onClick={this.decreaseClicks}>Decrement</button>
      </div>
    );
  }
}

export default App;