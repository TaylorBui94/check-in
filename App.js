import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import viewHost from './src/screens/ViewAccount_Host.js';
import { UserProvider } from './src/context/UserContext.js';




export default class App extends React.Component {
	

	
	state = {
		isFontLoaded: false,
	};

	async componentDidMount() {
		await Font.loadAsync({
			Bold: require('./src/fonts/Montserrat-Bold.otf'),
			SemiBold: require('./src/fonts/Montserrat-SemiBold.otf'),
			Regular: require('./src/fonts/Montserrat-Black.otf'),
			Thin: require('./src/fonts/SpaceMono-Regular.ttf'),
		});
		

		
		this.setState({ isFontLoaded: true });
	}

	render() {
		return this.state.isFontLoaded === true ? (
			<UserProvider>
				<AppNavigator />
			</UserProvider>
		) : (
			AppLoading
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
