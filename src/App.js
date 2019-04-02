import React, { Component } from 'react';
import Stats from "./HomeStatistics/Stats"
import ControllPanel from "./ControllPanel/ControllPanel"

class App extends Component {
  render() {
    return (
	<div>
      <Stats />
	  <ControllPanel />
	</div>
	);
  }
}

export default App;
