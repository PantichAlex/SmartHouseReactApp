import React, { Component } from 'react';
import Stats from "./HomeStatistics/Stats"
import ControllPanel from "./ControllPanel/ControllPanel"

import Style from "./App.module.css"

class App extends Component {
  render() {
    return (
	<div id={Style.mainLayout}>
      <Stats />
	  <ControllPanel />

	</div>
	);
  }
}

export default App;
