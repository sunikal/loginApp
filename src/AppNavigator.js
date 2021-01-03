import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from "./components/signup/Login";
import Example from "./components/signup/Example";
import Dashboard from "./components/signup/Dashboard";


const AppStack = createStackNavigator(
	{ 
		Login: { screen: Login },
		Example: { screen: Example },
		Dashboard:{ screen: Dashboard}
	},
	{
		headerMode: 'none',
		navigationOptions: () => ({
			headerVisible: false,
		})
	}
);

const prevGetStateForActionHomeStack = AppStack.router.getStateForAction;
AppStack.router.getStateForAction = (action, state) => {
	if (state && action.type === 'ReplaceCurrentScreen') {
		const routes = state.routes.slice(0, state.routes.length - 1);
		routes.push(action);
		return {
			...state,
			routes,
			index: routes.length - 1,
		};
	}
	return prevGetStateForActionHomeStack(action, state);
}



const AppNavigator = createSwitchNavigator(
	{
		App: AppStack,
	},
	{
		initialRouteName: 'App',
	}
);

export default AppNavigator;
