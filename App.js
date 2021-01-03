import React, { Component} from 'react';
import {createAppContainer} from 'react-navigation';
import NavigationService from './src/NavigationService';
import AppNavigator from './src/AppNavigator';
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef);}}/>
		);
    }
}